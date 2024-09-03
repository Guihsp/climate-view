import styled from 'styled-components';

export const WeatherContainer = styled.div`
    width: 100%;
    padding: 1rem; 
    background-color: var(--secondary-color);
    color: var(--white-color);
    display: flex;
    align-items: center;    
`;

export const CityName = styled.p`
    font-size: 1.5rem;
`;

export const WeatherTemp = styled.p`
    font-size: 4.5rem;
`;

export const WeatherDescription = styled.p`
    font-size: 1.1rem;
    text-transform: uppercase;
    margin: 0.5rem 0;
`;

export const WeatherDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.1rem;
    margin-top: .7rem;

    p {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 1.1rem; 
    }
`;

export const WeatherIcon = styled.img`
    width: 100px;
    height: auto;
`;
