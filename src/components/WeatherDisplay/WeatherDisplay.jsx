import React from 'react';
import PropTypes from 'prop-types';
import {
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
        <>
            <CityName>{localStorage.getItem('city')}</CityName>

            <WeatherTempContainer>
                <WeatherTemp>{(weatherData.main.temp).toFixed(0)}°C</WeatherTemp>
                <WeatherIcon src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather Icon" />
            </WeatherTempContainer>

            <WeatherDescription>{(weatherData.weather[0].description)}</WeatherDescription>

            <WeatherDetails>
                <p><RiWindyFill /> {weatherData.wind.speed} m/s</p>
                <p><SiRainmeter /> {weatherData.main.humidity}%</p>
                <p><FaTemperatureArrowUp /> {(weatherData.main.temp_max).toFixed(0)}°C</p>
                <p><FaTemperatureArrowDown /> {(weatherData.main.temp_min).toFixed(0)}°C</p>
            </WeatherDetails>

        </>
    );
}

WeatherDisplay.propTypes = {
    weatherData: PropTypes.shape({
        main: PropTypes.shape({
            temp: PropTypes.number.isRequired,
            temp_min: PropTypes.number.isRequired,
            temp_max: PropTypes.number.isRequired,
            humidity: PropTypes.number.isRequired,
        }).isRequired,
        weather: PropTypes.arrayOf(
            PropTypes.shape({
                description: PropTypes.string.isRequired,
                icon: PropTypes.string.isRequired,
            })
        ).isRequired,
        wind: PropTypes.shape({
            speed: PropTypes.number.isRequired,
        }).isRequired,
    })
};

export default WeatherDisplay;