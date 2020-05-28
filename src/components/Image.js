import styled from 'styled-components'
import React from 'react'
export default styled.img`
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
`
