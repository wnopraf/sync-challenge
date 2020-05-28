import React from 'react'
import styled from 'styled-components'
import HCustom from './HCustom'

export default () => (
  <section className="login-header">
    <HCustom>Online Login</HCustom>
    <Plogin>Enter your mobile number to log in to your account.</Plogin>
  </section>
)

const Plogin = styled.h6`
  color: white;
  margin-top: ${(props) => props.marginTop || '.5rem'};
`
