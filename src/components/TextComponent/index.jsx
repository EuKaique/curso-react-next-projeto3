import P from 'prop-types';
import { Container } from './style';

export const TextComponent = ({ children }) => {
    return (
        <Container>{ children }</Container>
    )
}

TextComponent.propTypes = {
    children: P.node.isRequired
}
