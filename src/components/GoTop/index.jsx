import P from 'prop-types';
import { Container } from './style';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const GoTop = ({ children }) => {
    return (
        <Container href="#" title="Go to top">
            <KeyboardArrowUp />
        </Container>
    )
}

GoTop.propTypes = {
    children: P.node.isRequired
}
