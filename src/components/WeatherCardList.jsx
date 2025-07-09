import { useEffect, useState } from 'react';
import { getWeatherFromLocalStorage } from '../services/storageService';
import WeatherCard from './WeatherCard';
import wind from '../assets/wind.png';
import humidity from '../assets/humidity.jpg';
import rain from '../assets/rain.jpg';
import pressure from '../assets/pressure.jpg';

const WeatherCardList = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const data = getWeatherFromLocalStorage();
        setWeather(data);
    }, []);

    if (!weather) {
        return <div>Chargement météo...</div>;
    }

    // Les données à afficher sous forme de tableau
    const weatherInfos = [
        {
            title: "Wind Status",
            value: weather.currentData?.wind?.speed ?? "0",
            unit: " km/h",
            image: wind,
            description: "Vitesse moyenne"
        },
        {
            title: "Humidity",
            value: weather.currentData?.main?.humidity ?? "0",
            unit: "%",
            image: humidity,
            description: "Humidité relative"
        },
        {
            title: "Rain (1h)",
            value: weather.currentData?.rain?.["1h"] ?? "0",
            unit: " mm",
            image: rain,
            description: "Précipitation"
        },
        {
            title: "Pressure",
            value: weather.currentData?.main?.pressure ?? "0",
            unit: " hPa",
            image: pressure,
            description: "Pression atmos."
        }
  ];

  return (
    <>    
        <div className="grid grid-cols-2 gap-4">
            {weatherInfos.map((info, index) => (
                    <WeatherCard
                        key={index}
                        title={info.title}
                        value={info.value}
                        unit={info.unit}
                        image={info.image}
                        description={info.description}
                    />
            ))}
        </div>
    </>
  );
};

export default WeatherCardList;