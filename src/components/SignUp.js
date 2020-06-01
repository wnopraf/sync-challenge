import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Image from './Image'
import Logo from '../assets/logos/Logo_X_(Fluorescent).svg'

export const SignUp = () => {
  const [isAnimated, setIsAnimated] = useState(false)
  useEffect(() => {
    const resetAnimation = () => {
      setIsAnimated(false)
      console.log('animation end')
    }
    window.addEventListener('animationend', resetAnimation)
    return () => {
      window.removeEventListener('animationend', resetAnimation)
    }
  }, [])
  const onClick = () => {
    setIsAnimated(true)
    console.log('Animated')
  }

  return (
    <SignUpSection>
      <SignUpWrapper>
        <PSignUp>Haven't got an account yet?</PSignUp>
        <Button
          className={
            'animate__animated ' + (isAnimated ? 'animate__bounceIn' : '')
          }
          background={'#006FCF'}
          textColor="white"
          onClick={onClick}
        >
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
const PSignUp = styled.p`
  color: gray;
  font-weight: 900;
  font-size: 0.65rem;
`
