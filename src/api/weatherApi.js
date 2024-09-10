import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'; 

export const fetchWeather = async (lat, lon) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                lat: lat,
                lon: lon,
                lang: 'pt_br',
                units: 'metric',
                appid: API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
};