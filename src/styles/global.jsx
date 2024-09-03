import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }

    :root {
        --primary-color: #1e213a;
        --secondary-color: #100e1d;
        --tertiary-color: #e7e7eb;
        --quaternary-color: #a09fb1;
        --quinary-color: #616475;
        --senary-color: #3c47e9;
        --white-color: #eee;
        --black-color: #000;
    }

    body {
        background-color: var(--primary-color);
        
    }
`;
