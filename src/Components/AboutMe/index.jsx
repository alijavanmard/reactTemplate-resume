import React from "react";
import {
  AboutBtnWrapper,
  AboutContainer,
  AboutHeading,
  AboutP,
  AboutTitle,
} from "./AboutMeElements";
import { Button } from "../ButtonElements";
const AboutMe = () => {
  return (
    <>
      <AboutContainer>
        <AboutTitle>About me</AboutTitle>
        <AboutHeading>
          I Have Experience in Coding Since 2008
        </AboutHeading>
        <AboutP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo
        </AboutP>
        <AboutBtnWrapper>
          <Button to="/">Read more</Button>
        </AboutBtnWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutMe;
