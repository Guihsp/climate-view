import React from 'react';
import { 
    WeatherContainer, 
    CityName, 
    WeatherTempContainer,
    WeatherTemp, 
    WeatherDetails, 
    WeatherDescription, 
    WeatherIcon 
} from './WeatherDisplay.styles';

import { RiWindyFill } from "react-icons/ri";
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";
import { SiRainmeter } from "react-icons/si";

function WeatherDisplay({ weatherData }) {
    if (!weatherData) return null;

    return (
        <WeatherContainer>
                <CityName>{localStorage.getItem('city')}</CityName>
                <WeatherTempContainer>
                    <WeatherTemp>{(weatherData.main.temp).toFixed(0)}°C</WeatherTemp>
                    <WeatherIcon src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather Icon" />
                </WeatherTempContainer>
                <WeatherDescription>{(weatherData.weather[0].description).toUpperCase()}</WeatherDescription>
                <WeatherDetails>
                    <p><RiWindyFill /> {weatherData.wind.speed} m/s</p>
                    <p><SiRainmeter /> {weatherData.main.humidity}%</p>
                    <p><FaTemperatureArrowUp /> {(weatherData.main.temp_max).toFixed(0)}°C</p>
                    <p><FaTemperatureArrowDown /> {(weatherData.main.temp_min).toFixed(0)}°C</p>
                </WeatherDetails>
        </WeatherContainer>
    );
}

export default WeatherDisplay;
