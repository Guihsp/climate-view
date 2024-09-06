import React, { useState } from 'react';
import styled from 'styled-components';
import { useWeatherSearch } from './hooks/useWeatherSearch';
import Logo from './components/Logo';
import CitySearchInput from './components/SearchInput/SearchInput';
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
    margin-top: 2rem;
    padding: 1rem;
`;

function App() {
    const { weatherData, city, setCity, handleSearch } = useWeatherSearch();

    const onSearch = () => {
        handleSearch(city);
    };

    return (
        <AppContainer>
            <SeachInputContainer>
                <Logo />
                <CitySearchInput city={city} setCity={setCity} onSearch={onSearch} />
            </SeachInputContainer>
            <WeatherDisplay weatherData={weatherData} />
        </AppContainer>
    );
}

export default App;