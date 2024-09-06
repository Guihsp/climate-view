import { useState, useEffect } from 'react';
import { fetchWeather } from '../api/weatherApi';

export function useWeatherSearch() {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');

    useEffect(() => {
        const savedCity = localStorage.getItem('city');
        const savedLat = localStorage.getItem('lat');
        const savedLon = localStorage.getItem('lon');

        if (savedCity && savedLat && savedLon) {
            setCity(savedCity);
            fetchWeather(savedLat, savedLon).then(data => setWeatherData(data));
        }
    }, []);

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
                localStorage.setItem('city', city);
                localStorage.setItem('lat', lat);
                localStorage.setItem('lon', lon);
            } else {
                console.error('City not found');
                setWeatherData(null);
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return { weatherData, city, setCity, handleSearch };
}