// api/services/index.js

// On importe chaque service individuellement
export { fetchData } from './fetchData.js';

// geoLocation
export { getCurrentLocation } from './getCurrentLocation.js'

// Weather
export { fetchAndLogWeather, getWeatherData, getCurrentLocationWeather, getCityLocationWeather } from './weatherService.js';