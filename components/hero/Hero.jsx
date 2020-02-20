import React, { useState } from 'react'
import HeroTypingAnimation from "./HeroTypingAnimation"
import HeroLinks from './HeroLinks.jsx'
import { HeroContainer } from './HeroStyles'

const HeroContent = ({resp}) => {
  const [linksVisible, setLinksVisible] = useState(false);
  
  const { heroTypingStatic, heroTypingLoop, heroSocialLinks } = resp.items[0].fields;
  
  const typingProps = {
    heroTypingStatic,
    heroTypingLoop,
    setLinksVisible
  };
  
  const linkProps = {
    active: linksVisible,
    heroSocialLinks
  };
  
  return (
    <>
      <HeroTypingAnimation {...typingProps} />
      <HeroLinks {...linkProps} />
    </>
  )
}

export default function Hero({resp}) {
  
  return (
    <HeroContainer>
      <HeroContent resp={resp}/>
    </HeroContainer>
  )
}
