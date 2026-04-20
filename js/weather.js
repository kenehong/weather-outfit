function getCurrentPosition() {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function fetchWeather(lat, lon) {
  var url =
    'https://api.open-meteo.com/v1/forecast' +
    '?latitude=' + lat + '&longitude=' + lon +
    '&current=temperature_2m,weather_code' +
    '&temperature_unit=fahrenheit' +
    '&timezone=auto';

  var res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch weather');
  }
  return await res.json();
}

async function geocodeCity(q) {
  var url = 'https://geocoding-api.open-meteo.com/v1/search' +
    '?name=' + encodeURIComponent(q) + '&count=5&language=en';
  var res = await fetch(url);
  if (!res.ok) return { results: [] };
  return await res.json();
}

async function fetchLocationName(lat, lon) {
  var url =
    'https://nominatim.openstreetmap.org/reverse' +
    '?lat=' + lat + '&lon=' + lon + '&format=jsonv2&addressdetails=1';

  var res = await fetch(url, {
    headers: {
      'Accept': 'application/json'
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch location name');
  }

  return await res.json();
}
