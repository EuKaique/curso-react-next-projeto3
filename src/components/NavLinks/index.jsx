import P from 'prop-types';
import { Container } from './style';
import { MenuLink } from '../MenuLink';

export const NavLinks = ({ Links = [] }) => {
    return (
        <Container>
            {Links.map((Link) => (
                <MenuLink key={Link.link} {...link}/>
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
