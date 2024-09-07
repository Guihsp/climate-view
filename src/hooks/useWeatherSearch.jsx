import { useState, useEffect } from 'react';
import { fetchWeather } from '../api/weatherApi';

function capitalizeWords(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

async function fetchCityPhoto(city) {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${city}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);
    const data = await response.json();
    if (data.results.length > 0) {
        return data.results[0].urls.regular;
    }
    return null;
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
        try {
            const geocodeResponse = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${import.meta.env.VITE_API_KEY}`
            );
            const geocodeData = await geocodeResponse.json();

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
                    localStorage.setItem('cityPhoto', cityPhotoUrl); // Salvar a URL da foto no localStorage
                }
                setCity('');
                setError('');
            } else {
                setError('Cidade não encontrada. Digite uma cidade válida.');
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