import svg from '../assets/logos/Logo_Sync_(Black).svg'

import React from 'react'
import { Hero } from '../components/HeroCard'
import Container from '../components/Container'
import Image from '../components/Image'
import { ReactComponent as Logo } from '../assets/logos/Logo_Sync_(Black).svg'
import '../index.css'
import LoginHeader from '../components/LoginHeader'
import ContentWrapper from '../components/ContentWrapper'
import LoginCheck from '../components/LoginCheck'
import CheckButton from '../components/CheckButton'
import Button from '../components/Button'
import ArrowLogo from '../assets/logos/flecha_button.svg'
import { ReactComponent as ArrowSvg } from '../assets/logos/flecha_button.svg'
import PersonalBusiness from '../components/PersonalBusiness'
import { SignUp } from '../components/SignUp'
import { Footer } from '../components/Footer'

export default {
  component: Hero,
  title: 'Hero',
}

export const HeroTest = () => <Hero />

export const HeroLogoImg = () => (
  <Hero>
    <Container>
      <figure className="logo-wrapper">
        <Image src={svg} width={'2.5rem'} />
      </figure>
    </Container>
  </Hero>
)

export const HeroLogoSvg = () => (
  <Hero>
    <Container>
      <figure className="logo-wrapper">
        <Logo />
      </figure>
    </Container>
  </Hero>
)

export const HeroHLogin = () => (
  <Hero>
    <Container>
      <figure className="logo-wrapper">
        <Logo />
      </figure>
      <ContentWrapper class="content-wrapper">
        <LoginHeader />
      </ContentWrapper>
    </Container>
  </Hero>
)

export const checkedInput = () => (
  <Hero>
    <Container>
      <div
        className="check-wrapper"
        style={{ margin: '0 auto', marginTop: '3rem' }}
      >
        <CheckButton type="checkbox" />
        <Button>
          <span>
            continue
            <Image src={ArrowLogo} width={'.75rem'} />
          </span>
        </Button>
        <Button>
          <span>continue</span>
          <ArrowSvg className={'arrow-svg'} />
        </Button>
      </div>
    </Container>
  </Hero>
)

export const HeroFullLogin = () => (
  <>
    <Hero>
      <Container>
        <figure className="logo-wrapper">
          <Logo />
        </figure>
        <ContentWrapper class="content-wrapper">
          <LoginHeader />
          <PersonalBusiness />
        </ContentWrapper>
        <SignUp />
      </Container>
    </Hero>
    <Footer></Footer>
  </>
)
