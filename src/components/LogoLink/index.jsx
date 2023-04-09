import P from 'prop-types';
import { Heading } from '../Heading';
import { Container } from './style';

export const LogoLink = ({ text, image = '', link }) => {
    return (
        <Heading size="small" uppercase>
            <Container href={link}>
                {image ? <img src={image} alt={text} /> : <span>{text}</span>}
            </Container>
        </Heading>
    )
}

LogoLink.propTypes = {
    text: P.string.isRequired,
    image: P.string,
    link: P.string.isRequired
}
 