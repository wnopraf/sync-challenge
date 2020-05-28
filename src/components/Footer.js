import React from 'react'
import Container from './Container'
import styled from 'styled-components'
import { SocialNav } from './SocialNav'
import { NavFooter } from './NavFooter'

export const Footer = () => {
  return (
    <Sfooter>
      <Container>
        <NavWrapper>
          <SocialNav></SocialNav>
          <NavFooter
            links={[
              'Home',
              'Community',
              'Events',
              'Jobs',
              'Suscribe to updates',
            ]}
          />
        </NavWrapper>
      </Container>
    </Sfooter>
  )
}

const Sfooter = styled.footer`
  padding: 1rem 0;
  background: #0a0a0a;
  color: #9f9f9f;
  font-size: 0.7rem;
`
const NavWrapper = styled.div`
  display: flex;
  color: #f9f9f9;
  justify-content: space-between;
  align-items: center;
`
