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
  if (condition === 'rain') return 'duck-rainy';
  if (tempF < TEMP_THRESHOLDS.coldMax) return 'bear-cold';
  if (tempF < TEMP_THRESHOLDS.coolMax) return 'shiba-cool';
  return 'shiba-hot';
}

async function initLiveWeather() {
  // Show default state immediately as fallback
  selectState(STATES[0]);

  try {
    const result = await getWeatherAndLocation();
    const data = result.weatherData;

    const tempF = data.current.temperature_2m;
    const code = data.current.weather_code;
    const condition = weatherCodeToCondition(code);
    const stateId = pickState(tempF, condition);

    const matched = STATES.find(function(s) {
      return s.id === stateId;
    });

    if (matched) {
      selectState(matched);
      document.getElementById('pTemp').textContent = Math.round(tempF) + '°F';
    }

    var locationEl = document.getElementById('locationText');
    if (locationEl) {
      var address = result.locationData.address || {};
      var place =
        address.town ||
        address.village ||
        address.hamlet ||
        address.city ||
        address.suburb ||
        '';
      locationEl.textContent = place;
    }
  } catch (err) {
    console.error('initLiveWeather error:', err);
  }
}
