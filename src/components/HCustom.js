import React from 'react'

import styled from 'styled-components'

const HStyled = styled.h1`
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) => props.fontSize || '2.3rem'};
  font-weight: ${(props) => props.fontWight || 'bold'};
  text-transform: capitalize;
  transition: opacity 500ms;
`
const HCustom = (props) => {
  return <HStyled {...props}>{props.children}</HStyled>
}
export default HCustom
