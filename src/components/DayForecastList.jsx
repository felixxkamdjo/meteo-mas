import { useEffect, useState } from 'react';
import { getWeatherFromLocalStorage } from '../services/storageService';
import DayForecastCard from './DayForecastCard';

const DayForecastList = () => {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        const data = getWeatherFromLocalStorage();
        // console.log(data.forecastData);
        const forecastList = data.forecastData?.list;
        // console.log(forecastList);
        setForecast(forecastList);
    }, []);

    if (!forecast.length === 0 || !forecast) {
        return <div>Chargement prévisions...</div>;
    }

  // Sélectionner les 4 premiers éléments
  const fourNextForecasts = forecast.slice(0, 4);

  return (
        <div className="flex flex-row gap-3">
            {fourNextForecasts.map((item, index) => (
                <DayForecastCard
                    key={index}
                    time={new Date(item.dt * 1000).getHours() + 'h'}
                    temp={Math.round(item.main.temp)}
                    icon={item.weather[0].icon}
                    description={item.weather[0].description}
                />
            ))}
        </div>
    );
};

export default DayForecastList;