import styled, { css } from 'styled-components';

const containerBackgroundActivate = (theme) => css`
    background: ${theme.colors.dark};
    color: ${theme.colors.light};
`;

export const Container = styled.div`
    ${ ({ theme, background }) => css`
        background: ${theme.colors.light};
        color: ${theme.colors.dark};
        ${background && containerBackgroundActivate(theme)};
        min-height: 100vh;
        display: flex;
        align-items: center;
    ` }

`;
