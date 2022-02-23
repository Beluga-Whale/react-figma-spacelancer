import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    height: 80px;
    position: sticky;
    top: 0;
    z-index: 10;
    background:#fff;
`

export const NavContainer = styled.div`
    max-width: 1200px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin: 0 auto;
    height: 100%;
    
`

export const NavLogo = styled.div`
    width:238px;
`

export const Logo = styled.img`
    width: 100%;
`

export const NavMenu = styled.ul`
    display:flex;
    width: 500px;
    justify-content: space-between;
    list-style: none;
`

export const NavItems = styled.li`
    color:#252525;
`

export const NavLinks = styled(LinkS)`
    cursor: pointer;
    transition: .5s;

    &:hover {
        padding-bottom: .5rem;
        transition: .5s;
    } 

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`

export const NavBtn = styled.div`
    
    display:flex;
    align-items:center;
    height: 40px;
`

export const NavBtnLink = styled(LinkR)`
    padding: 1rem;
    text-decoration: none;
    border-radius: 50px;
    background: #1E88E5;
    transition: .3s;
    color: #fff;
    font-weight: bold;

    &:hover {
        background: #01bf71;
    }

    
`

// export const HeroWork = styled.div``
// export const Work = styled.img``