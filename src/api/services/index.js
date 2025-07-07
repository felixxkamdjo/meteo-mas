// api/services/index.js

// On importe chaque service individuellement
export { default as fetchData } from './fetchData';

// geoLocation
export { getCurrentLocation } from './getCurrentLocation'

// Weather
export { fetchAndLogWeather, getWeatherData, getCurrentLocationWeather, getCityLocationWeather } from './weatherService';