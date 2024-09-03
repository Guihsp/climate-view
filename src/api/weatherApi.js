const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'; 

export const fetchWeather = async (lat, lon) => {
    try {
        const response = await fetch(`${BASE_URL}?lat=${lat}&lang=pt_br&lon=${lon}&units=metric&appid=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
};
