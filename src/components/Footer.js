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
        <FooterInfoWrapper>
          <FooterInfoItem className="footer-info-item__rights">
            <FooterP>
              All rights reserved. All trademarks displayed on this website are
              held by their respective owners.
            </FooterP>
            <FooterP>
              ® 2020 X Sync. and Sync.Moneywording/logos are registered
              trademarks of Sync. which is a trading style of Sync.Money UK Ltd.
            </FooterP>
            <FooterP>
              Sync.Money UK Ltd is a private company limited by shares
              incorporated in England and Wales with company number 11801268
              whose registered office address is at: Level 39, One Canada
              Square, E14 5AB London, United Kingdom. Sync. is a subsidiary of
              Sync.HQ Ltd.
            </FooterP>
            <FooterP>
              We provide payment services and accounts that will allow customers
              to store, transfer or pay with their funds. We are not a Bank.
              However, we are in the process of becoming an authorised payment
              institution by the UK Financial Conduct Authority, known as the
              FCA, to secure our and European licenses.The card is issued by
              Transact Payments Limited pursuant to licence by Mastercard
              International.
            </FooterP>
          </FooterInfoItem>
          <FooterInfoItem className="footer-info-item__terms">
            <p>
              <FooterLink>Terms and Conditions</FooterLink>
              &nbsp;&nbsp; | &nbsp;&nbsp;
              <FooterLink>Privacy Policy</FooterLink>
            </p>
          </FooterInfoItem>
        </FooterInfoWrapper>
      </Container>
    </Sfooter>
  )
}

const Sfooter = styled.footer`
  padding: 1.75rem 0;
  background: #0a0a0a;
  color: #9f9f9f;
  font-size: 0.7rem;
`
const NavWrapper = styled.nav`
  display: flex;
  color: #f9f9f9;
  justify-content: space-between;
  align-items: center;
`

const FooterInfoWrapper = styled.div`
  margin-top: 1.35rem;
  font-size: 0.6rem;
  display: flex;
  justify-content: space-between;
`
const FooterInfoItem = styled.div`
  &.footer-info-item__rights {
    width: 70%;
  }
  &.footer-info-item__terms {
    width: 30%;
    text-align: right;
  }
`
const FooterP = styled.div`
  padding: 0.35rem 0;
  line-height: 1.55;
`
const FooterLink = styled.a`
  cursor: pointer;
`
