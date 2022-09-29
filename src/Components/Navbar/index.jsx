import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
const Navbar = ({ toggle }) => {
  const [scrolNav, setScrolNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrolNav(true);
    } else {
      setScrolNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <>
      <Nav scrolNav={scrolNav}>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome} smooth={true} duration={1000} spy={true}>Youngman</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/" onClick={toggleHome} smooth={true} duration={1000} spy={true}>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="About" smooth={true} duration={1000} spy={true} offset={-80}>about</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Courses" smooth={true} duration={1000} spy={true} offset={-80}>Courses</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Blog" smooth={true} duration={1000} spy={true} offset={-80}>Blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Experience" smooth={true} duration={1000} spy={true} offset={-80}>Experience</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign in</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
