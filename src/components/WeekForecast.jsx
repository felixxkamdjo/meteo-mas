import { useEffect, useState } from "react";
import { getWeatherFromLocalStorage } from "../services/storageService";

const WeekForecast = () => {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        const data = getWeatherFromLocalStorage();
        const forecasts = data?.forecastData?.list ?? [];
        setForecast(forecasts);
    }, []);

    if (forecast.length === 0) {
        return <div>Chargement prévisions semaine...</div>;
    }

  // Prendre un élément toutes les 8 prévisions (≈ 1 par jour)
  const dailyForecasts = forecast.filter((_, index) => index % 8 === 0);

  return (
        <div className="flex flex-col gap-4">
            {dailyForecasts.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-row justify-between rounded-2xl w-full h-18 items-center px-3 py-2 bg-[var(--secondary-color)]"
                >
                <div className="flex flex-col">
                    <h4 className="flex font-normal">
                        {new Date(item.dt * 1000).toLocaleDateString("fr-FR", {
                            weekday: "long",
                        })}
                    </h4>
                    <h6 className="font-extralight">
                        {new Date(item.dt * 1000).toLocaleDateString("fr-FR", {
                            day: "2-digit",
                            month: "long",
                        })}
                    </h6>
                </div>

                <div className="flex flex-col font-bold text-lg">
                    {Math.round(item.main?.temp)}°C
                </div>

                <img
                    src={`http://openweathermap.org/img/wn/${item.weather?.[0]?.icon}@2x.png`}
                    alt={item.weather?.[0]?.description}
                    className="w-10 h-10"
                />
                </div>
            ))}
        </div>
  );
};

export default WeekForecast;