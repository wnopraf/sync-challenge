import React from 'react'
import styled from 'styled-components'
import HCustom from './HCustom'
import CheckButton from './CheckButton'

export default ({ htext, onLogin, loginState }) => (
  <LoginWrapper className={`login-${htext}`}>
    <HCustom className={`${loginState === htext ? '' : 'soft-fadeOut'} `}>
      {htext}
    </HCustom>

    <CheckButton onLogin={onLogin} value={htext} loginState={loginState} />
  </LoginWrapper>
)

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;

  .checkbox-wrapper {
    margin-left: auto;
  }
`
