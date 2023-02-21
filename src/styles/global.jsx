import {createGlobalStyle, css} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html{
        font-size: 62.5%;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: ${({theme}) => theme.font.family.primary};
        font-size: 1.6rem;
    }
    h1, h2, h3, h4, h5, h6{
        font-family: ${({theme}) => theme.font.family.secondary};
    }
`;