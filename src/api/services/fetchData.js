import { API_CONFIG } from '../config/API_CONFIG.js';

export const fetchData = async (endpoint, params = {}) => {
    const url = new URL(`${API_CONFIG.BASE_URL}/${endpoint}`);

    // Ajoute les paramètres par défaut et ceux passés en argument
    const allParams = { ...API_CONFIG.DEFAULT_PARAMS, ...params };

    for (let key in allParams) {
        url.searchParams.append(key, allParams[key]);
    };

    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error(`Erreur API: ${response.statusText}`);
        };

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Erreur API: ${error.message}`);
    }

};