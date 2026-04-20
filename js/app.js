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

function getTempUnit() { return localStorage.getItem('temp-unit') || 'F'; }

function formatTemp(tempF) {
  if (tempF == null) return '';
  if (getTempUnit() === 'C') return Math.round((tempF - 32) * 5 / 9) + '\u00B0C';
  return Math.round(tempF) + '\u00B0F';
}

function setTempUnit(unit) {
  localStorage.setItem('temp-unit', unit);
  if (typeof window.liveTempF === 'number') {
    liveTemp = formatTemp(window.liveTempF);
    var el = document.getElementById('pTemp');
    if (el) el.textContent = liveTemp;
  }
}

function extractPlace(address) {
  var city = address.city ||
    address.town ||
    address.village ||
    address.hamlet ||
    address.suburb ||
    address.neighbourhood ||
    address.county ||
    '';
  var region = address.state || address.region || address.country || '';
  if (city && region && city !== region) return city + ', ' + region;
  return city || region || '';
}

// ===== Favorites =====
var SEED_FAVORITES = [
  { lat: 25.7617, lon: -80.1918, name: 'Miami, Florida' },
  { lat: 64.1466, lon: -21.9426, name: 'Reykjavik, Iceland' },
  { lat: 34.0522, lon: -118.2437, name: 'Los Angeles, California' },
];

function sameCoord(a, b) { return Math.abs(a - b) < 0.01; }

function getFavorites() {
  var raw = localStorage.getItem('favorite-cities');
  if (raw === null) {
    localStorage.setItem('favorite-cities', JSON.stringify(SEED_FAVORITES));
    return SEED_FAVORITES.slice();
  }
  try { return JSON.parse(raw) || []; } catch (e) { return []; }
}

function isFavorite(lat, lon) {
  return getFavorites().some(function(f) {
    return sameCoord(f.lat, lat) && sameCoord(f.lon, lon);
  });
}

function addFavorite(lat, lon, name) {
  var favs = getFavorites();
  if (favs.some(function(f) { return sameCoord(f.lat, lat) && sameCoord(f.lon, lon); })) return;
  favs.push({ lat: lat, lon: lon, name: name || (lat.toFixed(2) + ', ' + lon.toFixed(2)) });
  localStorage.setItem('favorite-cities', JSON.stringify(favs));
  dispatchFavoritesChanged();
}

function removeFavorite(lat, lon) {
  var favs = getFavorites().filter(function(f) {
    return !(sameCoord(f.lat, lat) && sameCoord(f.lon, lon));
  });
  localStorage.setItem('favorite-cities', JSON.stringify(favs));
  dispatchFavoritesChanged();
}

function dispatchFavoritesChanged() {
  window.dispatchEvent(new Event('favoritesChanged'));
}

async function loadWeatherForLocation(lat, lon, displayName) {
  window.currentLocation = { lat: lat, lon: lon, name: displayName || '' };
  var locationEl = document.getElementById('locationText');

  // Fetch weather
  try {
    var weatherData = await fetchWeather(lat, lon);
    var tempF = weatherData.current.temperature_2m;
    var code = weatherData.current.weather_code;
    var condition = weatherCodeToCondition(code);
    var stateId = pickState(tempF, condition);

    // Location-local hour (Open-Meteo returns current.time in the requested timezone)
    if (weatherData.current.time) {
      var t = String(weatherData.current.time);
      var hourMatch = t.match(/T(\d{2}):/);
      if (hourMatch) window.locationHour = parseInt(hourMatch[1], 10);
    }

    var matched = STATES.find(function(s) {
      return s.id === stateId;
    });

    if (matched) {
      if (typeof TTS !== 'undefined') TTS.reset();
      window.liveTempF = tempF;
      liveTemp = formatTemp(tempF);
      selectState(matched);
    }
  } catch (err) {
    console.error('Weather fetch error:', err);
  }

  // Location label: prefer explicit displayName, else reverse-geocode
  if (!locationEl) return;
  if (displayName) {
    locationEl.textContent = displayName;
    window.dispatchEvent(new Event('currentLocationChanged'));
    return;
  }
  try {
    var locationData = await fetchLocationName(lat, lon);
    var address = locationData.address || {};
    var place = extractPlace(address);
    var label = place || (lat.toFixed(2) + ', ' + lon.toFixed(2));
    locationEl.textContent = label;
    window.currentLocation.name = label;
  } catch (err) {
    console.warn('Location name fetch failed:', err);
    locationEl.textContent = lat.toFixed(2) + ', ' + lon.toFixed(2);
    window.currentLocation.name = lat.toFixed(2) + ', ' + lon.toFixed(2);
  }
  window.dispatchEvent(new Event('currentLocationChanged'));
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
