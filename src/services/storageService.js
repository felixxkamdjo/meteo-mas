const WEATHER_DATA_KEY = "weatherData";
const LAST_UPDATE_KEY = "weatherLastUpdate";
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes en millisecondes

export const saveWeatherToLocalStorage = (data) => {
    localStorage.setItem(WEATHER_DATA_KEY, JSON.stringify(data));
    localStorage.setItem(LAST_UPDATE_KEY, Date.now());
};

export const getWeatherFromLocalStorage = () => {
    const data = localStorage.getItem(WEATHER_DATA_KEY);
    if (data) {
        return JSON.parse(data);
    }
    return null;
};

export const isCacheValid = () => {
    const lastUpdate = localStorage.getItem(LAST_UPDATE_KEY);
    if (!lastUpdate) return false;

    const now = Date.now();
    const diff = now - parseInt(lastUpdate, 10);
    return diff < CACHE_DURATION;
};
