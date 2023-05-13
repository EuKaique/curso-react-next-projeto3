import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/style';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.footer`
${ ({ theme }) => css`
    text-align: center;

    a{
        text-decoration: none;
        color: inherit;
    }

    & ${TextComponent}{
        font-size: ${theme.font.size.xsmall};
    }

    & ${SectionContainer}{
        padding-top: 0;
        padding-bottom: 0;
        border-top: 0.1rem solid ${theme.colors.grey};
    }

` }
`;
