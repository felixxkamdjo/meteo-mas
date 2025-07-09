export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    resolve({ latitude, longitude });  // Retourner un objet plat
                },
                (error) => {
                    reject(error);
                }
            );
        } else {
            reject(new Error("La géolocalisation n'est pas prise en charge par ce navigateur."));
        }
    });
};
