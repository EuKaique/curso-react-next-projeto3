import P from 'prop-types';
import { Container } from './styles';

export const SectionContainer = ({ children }) => {
    return (
        <Container>
            <h1>{children}</h1>
        </Container>
    )
}


SectionContainer.propTypes = {
    children: P.node.isRequired
}