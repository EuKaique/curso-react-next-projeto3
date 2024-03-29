import styled, { css } from 'styled-components';
import { Title as HeadingContent } from '../Heading/style';
import { Container as TextComponent } from '../TextComponent/style';

export const Container = styled.div`
    ${ ({ theme }) => css`
        & > ${TextComponent}{
            margin-bottom: ${theme.space.xhuge};
        }
    ` }
`;

export const Grid = styled.div`
    ${ ({ theme }) => css`
        counter-reset: grid-counter;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: ${theme.space.large};
    ` }
`;

export const GridElement = styled.div`
    ${ ({ theme }) => css`
        overflow: hidden;
    ` }
`;

export const Image = styled.img`
    ${ ({ theme }) => css`
        width: 100%;
        transition: all 300ms ease-in-out;
        
        &:hover{
            transform: scale(1.2) rotate(10deg);
        }
    ` }
`;
