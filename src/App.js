import React from 'react'
import { Hero } from '../components/HeroCard'
import Container from '../components/Container'
import { ReactComponent as Logo } from '../assets/logos/Logo_Sync_(Black).svg'
import '../index.css'
import LoginHeader from '../components/LoginHeader'
import ContentWrapper from '../components/ContentWrapper'
import PersonalBusiness from '../components/PersonalBusiness'
import { SignUp } from '../components/SignUp'
import { Footer } from '../components/Footer'

function App() {
  return (
    <section className="app">
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
    </section>
  )
}

export default App
