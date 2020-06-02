import React from 'react'
import styled from 'styled-components'
import laptop from '../assets/bg/laptop_max_compress.png'
const HeroCardStyled = styled.div`
  background-image: url(${laptop}),
    linear-gradient(25deg, #0a0a0a 0%, #343538 100%);
  background-size: 45rem, 100%;
  background-repeat: no-repeat;
  background-position-x: 69vw, 0;
  background-position-y: -23.35rem, 0;
  border-radius: 1rem;
  padding: 2rem 0;
`
const HeroCard = ({ children }) => <HeroCardStyled>{children}</HeroCardStyled>

const HeroFrameStyled = styled.div`
  padding: 0.35rem;

  background-color: #2a2a32;
`
const HeroFrame = ({ children }) => (
  <HeroFrameStyled>{children}</HeroFrameStyled>
)
export const Hero = ({ children }) => (
  <HeroFrame>
    <HeroCard>{children}</HeroCard>
  </HeroFrame>
)
