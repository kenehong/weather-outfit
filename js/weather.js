function getCurrentPosition() {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function fetchWeather(lat, lon) {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${lat}&longitude=${lon}` +
    `&current=temperature_2m,weather_code` +
    `&temperature_unit=fahrenheit`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch weather');
  }
  return await res.json();
}

async function fetchLocationName(lat, lon) {
  const url =
    `https://nominatim.openstreetmap.org/reverse` +
    `?lat=${lat}&lon=${lon}&format=jsonv2&addressdetails=1`;

  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json'
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch location name');
  }

  return await res.json();
}

async function getWeatherAndLocation() {
  let lat = DEFAULT_LOCATION.lat;
  let lon = DEFAULT_LOCATION.lon;

  try {
    const position = await getCurrentPosition();
    lat = position.coords.latitude;
    lon = position.coords.longitude;
  } catch (err) {
    console.warn('Geolocation failed, using default location.');
  }

  const [weatherData, locationData] = await Promise.all([
    fetchWeather(lat, lon),
    fetchLocationName(lat, lon)
  ]);

  return {
    weatherData,
    locationData,
    lat,
    lon
  };
}
