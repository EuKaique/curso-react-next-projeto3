import P from 'prop-types';
import { Container, MenuContainer } from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';

export const Menu = ({ links = [], logoData }) => {
    return (
        <Container>
            <SectionContainer>
                <MenuContainer>
                    <LogoLink {...logoData} />
                    <NavLinks links={links} />
                </MenuContainer>
            </SectionContainer>
        </Container>
    )
}

Menu.propTypes = {
    ...NavLinks.propTypes,
    logoData: P.shape(LogoLink.propTypes).isRequired
}
