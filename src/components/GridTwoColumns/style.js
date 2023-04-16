import styled, { css } from 'styled-components';
import { Title } from '../Heading/style';

export const Container = styled.div`
    ${ ({ theme, background }) => css`
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
        column-gap: ${theme.space.large};
        margin-left: 15%;

        ${Title} {
            color: ${background ? theme.colors.light : theme.colors.dark};
        }

        @media ${theme.media.mobile}{
            grid-template-columns: 1fr;
            text-align: center;
            margin-left: 0%;

            ${Title} {
                margin-bottom: ${theme.space.large};
            }
        }
    ` 
    }
`;

export const TextContainer = styled.div`
    ${ ({ theme }) => css`

    ` }
`;

export const ImageContainer = styled.div`
    ${ ({ theme }) => css`

    ` }
`;

export const Image = styled.img`
    ${ ({ theme }) => css`
        max-width: 50rem;
    ` }
`; 
