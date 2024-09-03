import { useState } from 'react';
import { fetchWeather } from '../api/weatherApi';

export function useWeatherSearch() {
    const [weatherData, setWeatherData] = useState(null);

    const handleSearch = async (city) => {
        try {
            const geocodeResponse = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${import.meta.env.VITE_API_KEY}`
            );
            const geocodeData = await geocodeResponse.json();

            if (geocodeData.length > 0) {
                const { lat, lon } = geocodeData[0];
                const weatherData = await fetchWeather(lat, lon);
                console.log(weatherData);
                setWeatherData(weatherData);
            } else {
                console.error('City not found');
                setWeatherData(null);
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return { weatherData, handleSearch };
}

