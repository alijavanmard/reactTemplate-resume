import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();

  };
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink onClick={toggleHome} to="/">
            Home
          </SidebarLink>
          <SidebarLink onClick={toggle} to="Courses">
            Courses
          </SidebarLink>
          <SidebarLink onClick={toggle} to="About">
            About
          </SidebarLink>
          <SidebarLink onClick={toggle} to="Blog">
          Blog
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/">sign in</SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
