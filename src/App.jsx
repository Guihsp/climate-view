import React, { useState } from 'react';
import styled from 'styled-components';
import { useWeatherSearch } from './hooks/useWeatherSearch';
import Logo from './components/Logo';
import CitySearchInput from './components/CitySearchInput/CitySearchInput';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';

const AppContainer = styled.div`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `;

const SeachInputContainer = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 1rem;
    `;

function App() {
    const [city, setCity] = useState('');
    const { weatherData, handleSearch } = useWeatherSearch();

    const onSearch = () => {
        handleSearch(city);
    };

    return (
        <AppContainer>
            <SeachInputContainer>
                <Logo />
                <CitySearchInput city={city} setCity={setCity} onSearch={onSearch} />
            </SeachInputContainer>
            <WeatherDisplay weatherData={weatherData} city={city} />
        </AppContainer>
    );
}

export default App;
