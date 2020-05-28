import React from 'react'
import styled from 'styled-components'

export default ({ children }) => <Section>{children}</Section>

const Section = styled.section`
  padding: 4rem 2.5rem;
  width: 100%;
  @media (min-width: 968px) {
    max-width: 80%;
  }
`
