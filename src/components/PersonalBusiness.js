import React, { useState } from 'react'
import LoginCheck from './LoginCheck'
import { ReactComponent as ArrowSvg } from '../assets/logos/flecha_button.svg'
import styled from 'styled-components'
import Button from './Button'

export default () => {
  const [loginState, setLoginState] = useState('personal')
  const onLogin = (e) => {
    console.log('login checked', e.target.value)
    const { value } = e.target
    setLoginState(value)
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

      <Button>
        <span>continue</span>
        <ArrowSvg className={'arrow-svg'} />
      </Button>
    </PersonalBusiness>
  )
}

const PersonalBusiness = styled.section`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  .login-business {
    margin-top: 0.75rem;
  }
  button {
    margin-left: auto;
    max-height: 40px;
  }
`

const LoginPaths = styled.div`
  width: 50%;
`
