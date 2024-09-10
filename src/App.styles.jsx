import styled, { keyframes } from 'styled-components';

const slideInFromLeft = keyframes`
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const AppContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    background: url(${props => props.$backgroundImage}) no-repeat center center;
    background-size: cover;
    position: relative;
    z-index: 1;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${props => props.theme.gradients.overlay};
        z-index: -1;
    }
`;

export const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;    
    margin-top: 6rem;
    padding: 1rem;
`;

export const ErrorMessage = styled.p`
    color: ${props => props.theme.colors.error};
    margin-top: 1rem;
`;

export const LoadingMessage = styled.p`
    color: ${props => props.theme.colors.white};
    margin-top: 1rem;
`;

export const WeatherDisplayContainer = styled.div`
    width: 100%;
    padding: 1rem;
    color: ${props => props.theme.colors.primary};
    animation: ${slideInFromLeft} 1s ease-out; 
`;