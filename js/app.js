function weatherCodeToCondition(code) {
  if (code <= 1) return 'clear';
  if (code <= 3) return 'cloudy';
  if (code <= 48) return 'fog';
  if (code <= 67) return 'rain';
  if (code <= 77) return 'snow';
  if (code <= 99) return 'storm';
  return 'cloudy';
}

function pickState(tempF, condition) {
  if (condition === 'rain' || condition === 'storm') return 'rainy';
  if (condition === 'snow') return 'snowy';
  if (tempF < TEMP_THRESHOLDS.snowyMax) return 'snowy';
  if (tempF < TEMP_THRESHOLDS.coldMax) return 'cold';
  if (tempF < TEMP_THRESHOLDS.coolMax) return 'cool';
  return 'hot';
}

function extractPlace(address) {
  return address.town ||
    address.village ||
    address.hamlet ||
    address.city ||
    address.suburb ||
    '';
}

async function loadWeatherForLocation(lat, lon, displayName) {
  var locationEl = document.getElementById('locationText');

  // Fetch weather
  try {
    var weatherData = await fetchWeather(lat, lon);
    var tempF = weatherData.current.temperature_2m;
    var code = weatherData.current.weather_code;
    var condition = weatherCodeToCondition(code);
    var stateId = pickState(tempF, condition);

    var matched = STATES.find(function(s) {
      return s.id === stateId;
    });

    if (matched) {
      if (typeof TTS !== 'undefined') TTS.reset();
      liveTemp = Math.round(tempF) + '°F';
      selectState(matched);
    }
  } catch (err) {
    console.error('Weather fetch error:', err);
  }

  // Location label: prefer explicit displayName, else reverse-geocode
  if (!locationEl) return;
  if (displayName) {
    locationEl.textContent = displayName;
    return;
  }
  try {
    var locationData = await fetchLocationName(lat, lon);
    var address = locationData.address || {};
    var place = extractPlace(address);
    if (place) locationEl.textContent = place;
  } catch (err) {
    console.warn('Location name fetch failed:', err);
  }
}

function setOverrideLocation(lat, lon, name) {
  localStorage.setItem('override-location', JSON.stringify({ lat: lat, lon: lon, name: name }));
  loadWeatherForLocation(lat, lon, name);
}

function clearOverrideLocation() {
  localStorage.removeItem('override-location');
  initLiveWeather();
}

async function initLiveWeather() {
  // Show default state immediately as fallback (no TTS until real weather loads)
  selectState(STATES[0], true);

  // If user picked a location manually, honor it and skip geolocation
  var override = null;
  try { override = JSON.parse(localStorage.getItem('override-location') || 'null'); } catch (e) {}
  if (override && override.lat != null && override.lon != null) {
    loadWeatherForLocation(override.lat, override.lon, override.name);
    return;
  }

  var lat = DEFAULT_LOCATION.lat;
  var lon = DEFAULT_LOCATION.lon;

  try {
    var position = await getCurrentPosition();
    lat = position.coords.latitude;
    lon = position.coords.longitude;
  } catch (err) {
    console.warn('Geolocation failed, using default location.');
  }

  loadWeatherForLocation(lat, lon);
}
