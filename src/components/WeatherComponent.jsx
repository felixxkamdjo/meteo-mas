import { useEffect, useState } from "react"
import { fetchDoualaWeather, fetchMyWeather } from "../api/services/test.js";


const WeatherComponent = () => {
    const [weather, setWeather] = useState(null);

     useEffect(() => {
        const fetchData = async () => {
            const data = await fetchMyWeather();
            console.log('data : ', data);
            setWeather(data);
        };

        fetchData();
    }, []);

    return (
        <>
            {weather ? (
                <p>
                    City : {weather.currentData.name} <br />
                    Temperature : {weather.currentData?.main?.temp}
                </p>
            ) : (
                <p>Chargement...</p>
            )}
        </>
    )
}

export default WeatherComponent;