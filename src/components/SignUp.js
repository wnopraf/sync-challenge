import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Image from './Image'
import Logo from '../assets/logos/Logo_X_(Fluorescent).svg'

export const SignUp = () => {
  return (
    <SignUpSection>
      <SignUpWrapper>
        <H6>Haven't got an account yet?</H6>
        <Button background={'#006FCF'} textColor="white">
          sign up
        </Button>
      </SignUpWrapper>
      <figure>
        <Image src={Logo} width={'45px'} />
      </figure>
    </SignUpSection>
  )
}

const SignUpSection = styled.section`
  margin-top: 2rem;
  padding-left: 2.5rem;
  display: flex;
  figure {
    margin-left: auto;
  }
`

const SignUpWrapper = styled.div`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  button {
    margin-left: 1rem;
  }
`
const H6 = styled.h6`
  color: gray;
`
