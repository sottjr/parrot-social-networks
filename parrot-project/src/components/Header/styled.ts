import styled from 'styled-components';
import {Navbar} from 'react-bootstrap';

export const HeaderContainer = styled.header`
    display: flex;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
`

export const HeaderNavbar = styled(Navbar)`
    display: flex;
    flex-direction: column;
    
`

export const HeaderLogo = styled.div`
    width: auto;
    height: 117px;
    display: flex;
    justify-content: flex-start;
`

export const Logo = styled.img`
    width: 245px;
    height: 100px;
    max-width: 100%;
    max-height: 100%;
`