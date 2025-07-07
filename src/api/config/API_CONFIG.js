const API_KEY = import.meta.env.OPENWEATHER_API_KEY;

const API_CONFIG = {
    BASE_URL : 'https://api.openweathermap.org/data/2.5',
    GEO_URL : 'https://api.openweathermap.org/geo/1.0',
    API_KEY : API_KEY,
    DEFAULT_PARAMS : {
        units : 'metric',
        appid : API_KEY
    }
};

export default API_CONFIG;