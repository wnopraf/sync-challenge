import React from 'react'
import styled from 'styled-components'
import HCustom from './HCustom'

const LoginHeader = () => (
  <section className="login-header">
    <HCustom>Online Login</HCustom>
    <PLogin>Enter your mobile number to log in to your account.</PLogin>
  </section>
)

const PStyled = styled.p`
  color: white;
  font-weight: 900;
  font-size: 0.8rem;
  margin-top: ${(props) => props.marginTop};
`

const PLogin = ({ children, ...props }) => (
  <PStyled {...props}>{children}</PStyled>
)

export default LoginHeader
