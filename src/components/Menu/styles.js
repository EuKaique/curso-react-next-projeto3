import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/style';

export const Container = styled.div`
    ${ ({ theme }) => css`
        position: fixed;
        z-index: 5;
        top: 0;
        right: 0;
        left: 0;
        width: 100%;
        background-color: ${theme.colors.light};

        ${SectionContainer}{
            padding: 0 inherit;
        }

        ${Heading}{
            margin: 0 inherit;
        }

        @media ${theme.media.mobile}{
            height: 100vh;

            ${SectionContainer}{
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                height: 100vh;
                align-items: center;
                overflow-y: auto;
            }

            ${Heading}{
                padding-bottom: ${theme.space.large};
                display: flex;
                justify-content: center;
            }
        }
    ` }
`;

export const MenuContainer = styled.div`
    ${ ({ theme }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media ${theme.media.mobile}{
            display: block;
            text-align: center;
            padding-bottom: ${theme.space.xxlarge} 0;
        }
    ` }
`;

export const Button = styled.button`
    ${ ({ theme }) => css`

    ` }
`;
