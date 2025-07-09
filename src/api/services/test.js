import { getCurrentLocationWeather, getCityLocationWeather } from './weatherService.js';

// Météo position actuelle
export const fetchMyWeather = async () => {
    const data = await getCurrentLocationWeather();
    console.log('current location : ', data);

    return data;
};

// Météo pour une ville
export const fetchDoualaWeather = async () => {
    const data = await getCityLocationWeather('Douala');
    // console.log('Douala : ', data);
};