import React, { useState, useEffect, useRef } from 'react'
import LoginCheck from './LoginCheck'
import { ReactComponent as ArrowSvg } from '../assets/logos/flecha_button.svg'
import styled from 'styled-components'
import { Button } from './Button'
import { IoIosCheckmark } from 'react-icons/io'

export default () => {
  const [loginState, setLoginState] = useState('personal')
  const [animateContinue, setAnimateContinue] = useState(false)
  const [isOut, setIsOut] = useState(false)

  const onLogin = (e) => {
    console.log('login checked', e.target.value)
    const { value } = e.target
    setLoginState(value)
  }

  const onContinue = () => {
    setAnimateContinue(true)
  }
  return (
    <PersonalBusiness>
      <LoginPaths>
        <LoginCheck
          htext={'personal'}
          onLogin={onLogin}
          loginState={loginState}
        />
        <LoginCheck
          htext={'business'}
          onLogin={onLogin}
          loginState={loginState}
        />
      </LoginPaths>

      <ContinueButton onClick={onContinue} animateContinue={animateContinue}>
        <ButtonContent
          animateContinue={animateContinue}
          isOut={isOut}
          setIsOut={setIsOut}
        />
        <CustomCheck animateContinue={animateContinue} isOut={isOut} />
      </ContinueButton>
    </PersonalBusiness>
  )
}
const ContinueButton = styled(Button)`
  padding: ${(props) => (props.animateContinue ? '0' : '0.5rem 1.25rem')};
  background: ${(props) => (props.animateContinue ? '#95b100' : '#D7FF00')};
  border-color: ${(props) => (props.animateContinue ? '#95b100' : '#D7FF00')};
`
const PersonalBusiness = styled.section`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  .login-business {
    margin-top: 0.75rem;
  }
  button {
    margin-left: auto;
  }
`

const LoginPaths = styled.div`
  width: 50%;
`
const ButtonContent = styled(
  ({ animateContinue, isOut, setIsOut, className }) => {
    const buttonContent = useRef(null)
    const setIsOutRef = useRef({ setIsOut })
    useEffect(() => {
      const onTransitionEnd = (e) => {
        const { target, propertyName } = e
        if (target === buttonContent.current && propertyName === 'width') {
          console.log('animte-button-clik !!')
          setIsOutRef.current.setIsOut(true)
        }
      }
      window.addEventListener('transitionend', onTransitionEnd)
      return () => {
        window.removeEventListener('transitionend', onTransitionEnd)
      }
    }, [])

    return (
      !isOut && (
        <span className={className} ref={buttonContent}>
          <span>continue</span>
          <ArrowSvg className={'arrow-svg'} />
        </span>
      )
    )
  }
)`
  display: block;
  width: ${(props) => (props.animateContinue ? '1.5rem' : '92px')};
  height: ${(props) => (props.animateContinue ? '1.5rem' : '15px')};
  overflow: hidden;
  opacity: ${(props) => (props.animateContinue ? '0' : '1')};
  transition: opacity 300ms, width 1s, height 1s;
`
const CustomCheck = ({ animateContinue, isOut }) => {
  return animateContinue && <IoIosCheckmarkTransparent isOut={isOut} />
}

const IoIosCheckmarkTransparent = styled(IoIosCheckmark)`
  transition: opacity 700ms;
  display: block;
  width: ${(props) => (props.isOut ? '1.5rem' : '0')};
  height: ${(props) => (props.isOut ? '1.5rem' : '0')};
  opacity: ${(props) => (props.isOut ? '1' : '0')};
`
