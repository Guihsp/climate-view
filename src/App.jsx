import React from 'react';
import styled from 'styled-components';
import { useWeatherSearch } from './hooks/useWeatherSearch';
import Logo from './components/Logo/Logo';
import CitySearchInput from './components/SearchInput/SearchInput';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';

const AppContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: url(${props => props.$backgroundImage}) no-repeat center center;
    background-size: cover;
    position: relative;
    z-index: 1;
`;

const BackgroundOverlay = styled.div`
    background: linear-gradient(180deg, #100e1dc3 0%, #100e1d 100%);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

const SearchInputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5rem;
    padding: 1rem;
`;

const ErrorMessage = styled.p`
    color: red;
    margin-top: 1rem;
    aria-live: assertive;
`;

const LoadingMessage = styled.p`
    color: white;
    margin-top: 1rem;
`;

function App() {
    const { weatherData, city, setCity, handleSearch, error, cityPhoto, isLoading } = useWeatherSearch();

    const onSearch = () => {
        handleSearch(city);
    };

    return (
        <AppContainer $backgroundImage={cityPhoto}>
            <SearchInputContainer>
                <Logo />
                <CitySearchInput city={city} setCity={setCity} onSearch={onSearch} />
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {isLoading && <LoadingMessage>Carregando...</LoadingMessage>}
            </SearchInputContainer>
            <WeatherDisplay weatherData={weatherData} city={localStorage.getItem('city') || city} />
            <BackgroundOverlay />
        </AppContainer>
    );
}

export default App;