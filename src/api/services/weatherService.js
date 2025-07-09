import { fetchData, getCurrentLocation } from './index.js';

export const fetchAndLogWeather = async (type, location) => {
    if (!location) {
        console.warn('Error with location');
        return null;
    }

    let params = {};

    // Si location est une string (nom de ville)
    console.log('location :', location);
    if (typeof location === 'string') {
        params.q = location;
    }
    // Si location est un objet avec latitude et longitude
    else if (typeof location === 'object' && location.latitude && location.longitude) {
        params.lat = location.latitude;
        params.lon = location.longitude;
    } else {
        console.warn('Format de location non reconnu');
        return null;
    }

    try {
        const data = await fetchData(type, params);
        // console.log(`${type.toUpperCase()} Data:`, data);
        return data;
    } catch (error) {
        console.warn(`An error to fetch ${type} data`, error.message);
        return null;
    }
};


export const getWeatherData = async (location) => {
    const currentData = await fetchAndLogWeather('weather', location);
    const forecastData = await fetchAndLogWeather('forecast', location);
    
    // console.log('temp : ', currentData.main.temp);
    return { currentData, forecastData };
};

export const getCurrentLocationWeather = async () => {
    try {
        const currentLocation = await getCurrentLocation();
        const currentLocationData = await getWeatherData(currentLocation);
        return currentLocationData;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getCityLocationWeather = async (city) => {
    try {
        const cityWeatherData = await getWeatherData(city);
        return cityWeatherData;
    } catch (error) {
        console.warn(error);
        return null;
    }
};