import P from 'prop-types';
import { Container } from './style';

export const  MenuLink = ({ children, newTab = false, link }) => {
    const target = newTab ? '_target' : '_self'

    return (
        <Container target={target} href={link}>{ children }</Container>
    )
}

MenuLink.propTypes = {
    children: P.node.isRequired,
    link: P.string.isRequired,
    newTab: P.bool
}
