import {createGlobalStyle, css} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
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
        margin: ${({ theme }) => theme.space.large} 0;
    }
    p{
        margin: ${({ theme }) => theme.space.medium} 0;
    }
    ol, ul{
        margin: ${({ theme }) => theme.space.medium};
        padding: ${({ theme }) => theme.space.medium};
    }
    a{
        color: ${({theme}) => theme.colors.red};
    }
`;