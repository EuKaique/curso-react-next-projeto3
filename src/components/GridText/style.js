import styled, { css } from 'styled-components';
import { Title as HeadingContent } from '../Heading/style';
import { Container as TextComponent } from '../TextComponent/style';

export const Container = styled.div`
    ${ ({ theme }) => css`
        ${TextComponent}{
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

        @media ${theme.media.mobile}{
            grid-template-columns: 1fr;
        }
    ` }
`;

export const GridElement = styled.div`
    ${ ({ theme }) => css`
        ${HeadingContent}{
            position: relative;
            left: 5rem;
        }

        ${HeadingContent}::before{
            counter-increment: grid-counter;
            content: counter(grid-counter);
            position: absolute;
            font-size: 7rem;
            top: -2.5rem;
            left: -5rem;
            transform: rotate(5deg);
        }
    ` }
`;
