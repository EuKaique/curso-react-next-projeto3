import P from 'prop-types';
import { Container, Image, ImageContainer, TextContainer } from './style';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';

export const GridTwoColumns = ({ title, text, srcImage, background }) => {
    return (
        <SectionBackground background={background}>
            <Container background={background}>
                <TextContainer>
                    <Heading uppercase>{title}</Heading>
                    <TextComponent>{text}</TextComponent>
                </TextContainer>
                <ImageContainer>
                    <Image src={srcImage} />
                </ImageContainer>
            </Container>
        </SectionBackground>
    )
}

GridTwoColumns.propTypes = {
    title:      P.string.isRequired,
    text:       P.string.isRequired,
    srcImage:   P.string.isRequired,
    background: P.bool,
}
