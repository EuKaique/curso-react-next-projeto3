import P from 'prop-types';
import { Container } from './style';
import { MenuLink } from '../MenuLink';

export const NavLinks = ({ links = [] }) => {
    return (
        <Container aria-label="Main menu">
            {links.map((link) => (
                <MenuLink key={link.link} {...link}/>
            ))}
        </Container>
    )
}

NavLinks.propTypes = {
    links: P.arrayOf(P.shape({
        children: P.string.isRequired,
        link: P.string.isRequired,
        newTab: P.bool
    }),
    ).isRequired
}
