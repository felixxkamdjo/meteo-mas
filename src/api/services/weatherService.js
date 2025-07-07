import fetchData from './index';

export const fetchAndLogWeather = async (type, location) => {
    if (location) {
        try {
            const data = await fetchData(type, location);
            console.log(`${type.toUpperCase()} Data:`, data);
            return data;
        } catch (error) {
            console.warn(`An error to fetch ${type} data`);
            return null;
        }
    } else {
        console.warn('Error with location');
        return null;
    }
};


export const getWeatherData = async (location) => {
    const currentData = await fetchAndLogWeather('weather', location);
    const forecastData = await fetchAndLogWeather('forecast', location);
    
    return { currentData, forecastData };
};

export const getCurrentLocationWeather = async (getGeoLocalizationFn) => {
    try {
        const currentLocation = await getGeoLocalizationFn();
        const currentLocationData = await getWeatherData(currentLocation);
        return currentLocationData;
    } catch (error) {
        console.warn(error);
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