export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const currentLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                resolve(currentLocation);   // la position est passée ici
            },
            () => {
                reject("Impossible de récupérer la position.");
            }
        );
    });
};