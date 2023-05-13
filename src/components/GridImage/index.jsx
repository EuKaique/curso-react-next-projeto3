import P from 'prop-types';
import { Container, Grid, GridElement, Image } from './style';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { SectionBackground } from '../SectionBackground';

export const GridImage = ({ title, subtitle, grid, background = false }) => {
    return (
        <SectionBackground background={background}>
            <Container>
                <Heading size="huge" uppercase colorDark={!background} as="h2">{title}</Heading>
                <TextComponent>{subtitle}</TextComponent>
                <Grid>
                    {grid.map((el) => (
                        <GridElement key={el.image}>
                            <Image src={el.image} alt={el.altText}/>
                        </GridElement>
                    ))}
                </Grid>
            </Container>
        </SectionBackground>
    )
}

GridImage.propTypes = {
    background: P.bool,
    title: P.node.isRequired,
    subtitle: P.string.isRequired,
    grid: P.arrayOf(
        P.shape({
            altText: P.string.isRequired,
            image: P.string.isRequired
        })
    ).isRequired
}
