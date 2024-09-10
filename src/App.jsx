import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./styles/global.jsx";
import { theme } from './styles/theme';

import { useWeatherSearch } from './hooks/useWeatherSearch';

import Logo from './components/Logo/Logo';
import CitySearchInput from './components/SearchInput/SearchInput';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';
import {
    AppContainer,
    SearchContainer,
    ErrorMessage,
    LoadingMessage,
    WeatherDisplayContainer
} from './App.styles';

function App() {
    const { weatherData, city, setCity, handleSearch, error, cityPhoto, isLoading } = useWeatherSearch();

    const onSearch = () => {
        handleSearch(city);
    };

    return (
        <ThemeProvider theme={theme}>
            <AppContainer $backgroundImage={cityPhoto}>

                <SearchContainer>
                    <Logo />
                    <CitySearchInput city={city} setCity={setCity} onSearch={onSearch} />
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {isLoading && <LoadingMessage>Carregando...</LoadingMessage>}
                </SearchContainer>

                <WeatherDisplayContainer>
                    <WeatherDisplay weatherData={weatherData} city={localStorage.getItem('city') || city} />
                </WeatherDisplayContainer>

            </AppContainer>

            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;