import styled, { css } from 'styled-components';

const TitleSize = {
    small: (theme) => css`
        font-size: ${theme.font.size.small};
    `,
    medium: (theme) => css`
        font-size: ${theme.font.size.large};
    `,
    big: (theme) => css`
        font-size: ${theme.font.size.xlarge};
    `,
    huge: (theme) => css`
        font-size: ${theme.font.size.xhuge};
        ${MediaFont(theme)}
    `,
}

const MediaFont = (theme) => css`
    @media ${theme.font.media.mobile}{
        font-size: ${theme.font.size.xlarge}
    }
`

const TitleCase = (uppercase) => css`
    text-transform: ${uppercase ? 'uppercase' : 'none'}
`

export const Title = styled.h1`
    ${({ theme, colorDark, size, uppercase }) => css`
        color: ${colorDark ? theme.colors.dark : theme.colors.light};
        ${TitleSize[size](theme)}
        ${TitleCase(uppercase)}
    `}
`;