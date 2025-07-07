import { useState } from 'react';
import fetchData from './fetchData';

const getGeoLocalization = () => {
    const [error, setError] = useState(false);
    const [location, setLocation] = useState({longitude : 0, latitude : 0});

    const successCallback = async (position) => {
        setLocation({longitude : position.coords.longitude, latitude : position.coords.latitude });
        return location;
    };

    const errorCallback = () => {
        console.log("Impossible de récupérer la position.");
        setError(true);
        return error;
    };
    
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
};


const getCurrentWeather = async () => {
    const location = getGeoLocalization();

    if(location != false) {
        try {
            const data = await fetchData('weather', location);
            console.log(data);
        } catch (error) {
            console.warn('An error to fetch data');
        }
    }
    else {
        console.warn('Error with location');
    }
};

export default getCurrentWeather;