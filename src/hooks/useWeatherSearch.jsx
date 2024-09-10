import { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchWeather } from '../api/weatherApi';

function capitalizeWords(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

async function fetchCityPhoto(city) {
    const BASE_URL = 'https://api.unsplash.com/search/photos';
    const API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

    try {
        const response = await axios.get(`${BASE_URL}`, {
            params: {
                query: city,
                order_by: 'relevant',
                orientation: 'landscape',
                page: 2,
                per_page: 2,
                client_id: API_KEY
            }
        });
        const data = response.data;
        if (data.results.length > 0) {
            return data.results[0].urls.regular;
        }
        return null;
    } catch (error) {
        console.error('Error fetching city photo:', error);
        return null;
    }
}

export function useWeatherSearch() {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const [cityPhoto, setCityPhoto] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const savedCity = localStorage.getItem('city');
        const savedLat = localStorage.getItem('lat');
        const savedLon = localStorage.getItem('lon');
        const savedCityPhoto = localStorage.getItem('cityPhoto');

        if (savedCity && savedLat && savedLon) {
            setCity(savedCity);
            fetchWeather(savedLat, savedLon).then(data => setWeatherData(data));
            if (savedCityPhoto) {
                setCityPhoto(savedCityPhoto);
            }
        }
    }, []);

    const handleSearch = async (city) => {
        setIsLoading(true);

        const BASE_URL = 'https://api.openweathermap.org/geo/1.0/direct';
        const API_KEY = import.meta.env.VITE_API_KEY;

        try {
            const geocodeResponse = await axios.get(`${BASE_URL}`, {
                params: {
                    q: city,
                    limit: 1,
                    appid: API_KEY
                }
            });
            const geocodeData = geocodeResponse.data;

            if (geocodeData.length > 0) {
                const { lat, lon } = geocodeData[0];
                const weatherData = await fetchWeather(lat, lon);
                const capitalizedCity = capitalizeWords(city);
                const cityPhotoUrl = await fetchCityPhoto(capitalizedCity);
                setWeatherData(weatherData);
                localStorage.setItem('city', capitalizedCity);
                localStorage.setItem('lat', lat);
                localStorage.setItem('lon', lon);
                if (cityPhotoUrl) {
                    setCityPhoto(cityPhotoUrl);
                    localStorage.setItem('cityPhoto', cityPhotoUrl);
                }
                setCity('');
                setError('');
            } else {
                setError('Cidade não encontrada. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError('Erro ao buscar dados meteorológicos. Por favor, tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    return { weatherData, city, setCity, handleSearch, error, cityPhoto, isLoading };
}