import P from 'prop-types';
import { Container, Grid, GridElement } from './style';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';

export const GridText = ({ title, subtitle, grid, background = false }) => {
    return (
        <SectionBackground background={background}>
            <Container>
                <Heading size="huge" uppercase colorDark={!background} as="h2">{title}</Heading>
                <TextComponent>{subtitle}</TextComponent>
                <Grid>
                    {grid.map((el) => (
                        <GridElement key={el.title}>
                            <Heading size="medium" colorDark={!background} as="h3">{el.title}</Heading>
                            <TextComponent>{el.description}</TextComponent>
                        </GridElement>
                    ))}
                </Grid>
            </Container>
        </SectionBackground>
    )
}

GridText.propTypes = {
    background: P.bool,
    title: P.node.isRequired,
    subtitle: P.string.isRequired,
    grid: P.arrayOf(
        P.shape({
            title: P.string.isRequired,
            description: P.string.isRequired
        })
    ).isRequired
}
