import styled from 'styled-components';

export const CityName = styled.p`
    font-size: 1.5rem;
`;

export const WeatherTempContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    flex-wrap: wrap;
`;

export const WeatherTemp = styled.p`
    font-size: 4.5rem;
`;

export const WeatherDescription = styled.p`
    font-size: 1.1rem;
    text-transform: uppercase;
`;

export const WeatherDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.1rem;
    margin-top: .7rem;

    p {
        display: flex;
        align-items: center;
        gap: .3rem;
        font-size: 1.1rem; 
    }
`;

export const WeatherIcon = styled.img`
    width: 100px;
    height: auto;   
`;
