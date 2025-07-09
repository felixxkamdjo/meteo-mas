import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentLocationWeather, isCacheValid, getWeatherFromLocalStorage, saveWeatherToLocalStorage } from "../services";

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        try {
            const data = await getCurrentLocationWeather();
            setWeather(data);
            saveWeatherToLocalStorage(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (isCacheValid()) {
            const cachedWeather = getWeatherFromLocalStorage();
            setWeather(cachedWeather);
        } else {
            fetchWeather();
        }
    }, []);

    return (
        <WeatherContext.Provider value={{ weather }}>
            {children}
        </WeatherContext.Provider>
    );
};
