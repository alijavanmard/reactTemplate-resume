import React from "react";
import {
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLinksItem,
  FooterLinksTitle,
  FooterLinksWrapper,
  FooterWrap,
  SocialIconLinks,
  SocialIcons,
  SocialLogo,
  SocialMediaContainer,
  SocialMediaWrap,
  WebsitesRights,
} from "./FooterElements";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItem>
              <FooterLinksTitle>About us</FooterLinksTitle>
              <FooterLink to="home">Home</FooterLink>
              <FooterLink to="courses">Courses</FooterLink>
              <FooterLink to="blog">Blog</FooterLink>
              <FooterLink to="rouadmap">Rouadmap</FooterLink>
            </FooterLinksItem>
            <FooterLinksItem>
              <FooterLinksTitle>About us</FooterLinksTitle>
              <FooterLink to="home">Home</FooterLink>
              <FooterLink to="courses">Courses</FooterLink>
              <FooterLink to="blog">Blog</FooterLink>
              <FooterLink to="rouadmap">Rouadmap</FooterLink>
            </FooterLinksItem>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItem>
              <FooterLinksTitle>About us</FooterLinksTitle>
              <FooterLink to="home">Home</FooterLink>
              <FooterLink to="courses">Courses</FooterLink>
              <FooterLink to="blog">Blog</FooterLink>
              <FooterLink to="rouadmap">Rouadmap</FooterLink>
            </FooterLinksItem>
            <FooterLinksItem>
              <FooterLinksTitle>About us</FooterLinksTitle>
              <FooterLink to="home">Home</FooterLink>
              <FooterLink to="courses">Courses</FooterLink>
              <FooterLink to="blog">Blog</FooterLink>
              <FooterLink to="rouadmap">Rouadmap</FooterLink>
            </FooterLinksItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMediaContainer>
          <SocialMediaWrap>
            <SocialLogo>Youngman</SocialLogo>
            <WebsitesRights>Youngman Copy Rights 2022</WebsitesRights>
            <SocialIcons>
              <SocialIconLinks>
                <FaFacebook />
              </SocialIconLinks>
              <SocialIconLinks>
                <FaYoutube />
              </SocialIconLinks>
              <SocialIconLinks>
                <FaTwitter />
              </SocialIconLinks>
              <SocialIconLinks>
                <FaInstagram />
              </SocialIconLinks>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMediaContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
