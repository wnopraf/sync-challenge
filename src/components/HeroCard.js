import React from 'react'
import styled from 'styled-components'
import laptop from '../assets/bg/laptop.png'
const HeroCard = styled.div`
  background-image: url(static/media/laptop.85638e4f.png),
    linear-gradient(
      18deg,
      rgba(11, 11, 11, 1) 0%,
      rgb(18, 17, 17) 45%,
      rgb(46, 46, 46) 100%
    );
  background-size: 45rem, 100%;
  background-repeat: no-repeat;
  background-position-x: 69vw, 0;
  background-position-y: -23.35rem, 0;
  border-radius: 1rem;
  padding: 2rem 0;
`
const HeroFrame = styled.div`
  padding: 0.25rem;

  background-color: #2a2a32;
`

export const Hero = ({ children }) => (
  <HeroFrame>
    <HeroCard>{children}</HeroCard>
  </HeroFrame>
)
