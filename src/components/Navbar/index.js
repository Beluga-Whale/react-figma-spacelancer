import React from 'react'
import ImgL from '../../images/logo.svg'
import {
    Nav,
    NavContainer,
    NavLogo,
    Logo,
    NavMenu,
    NavItems,
    NavLinks,
    NavBtn,
    NavBtnLink
}from './NavbarElements'

const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo>
                    <Logo src={ImgL} />
                </NavLogo>
                <NavMenu>
                    <NavItems>
                        <NavLinks to="/" spy={true} smooth={true} offset={30} exact='true' duration={500} >Home</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="find"spy={true} smooth={true} offset={-50} exact='true' duration={500} >Find Work</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="cate" spy={true} smooth={true} offset={30} exact='true' duration={500}>Find Freelancers</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="" spy={true} smooth={true} offset={30} exact='true' duration={500}>Log In</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="">Sign Up</NavLinks>
                    </NavItems>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="">Post a project</NavBtnLink>
                </NavBtn>
            </NavContainer>
        </Nav>
    )
}

export default Navbar