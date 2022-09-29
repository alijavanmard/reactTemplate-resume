import React, { useState } from "react";

import Hero from "../../images/hero.jpg";
import { Button } from "../ButtonElements";
import {
  HeroBg,
  HeroP,
  HeroContainer,
  HeroContent,
  HeroH1,
  ImageBg,
  ArrowForward,
  ArrowRight,
  HeroBtnWrapper,
} from "./HeroElements";
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={Hero}></ImageBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to Youngman Website</HeroH1>
        <HeroP>For React developers</HeroP>
        <HeroBtnWrapper>
          <Button to="/" primary="true" onMouseEnter={onHover} onMouseLeave={onHover} dark="true">
            Learn More!{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
