import P from 'prop-types';
import { Container } from './style';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

export const Base = ({ links = [], logoData, footerHtml, children }) => {
    return (
        <>
            <Menu links={links} logoData={logoData} />
            <Container>
                <h1>{ children }</h1>
                <Footer html={footerHtml} />
            </Container>
            <GoTop />
        </>
    )
}

Base.propTypes = {
    children: P.node.isRequired,
    ...Menu.propTypes,
    footerHtml: P.string.isRequired
}
