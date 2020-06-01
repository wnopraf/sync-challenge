import styled from 'styled-components'
import React from 'react'

const ImgStyled = styled.img`
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
`

const Image = (props) => <ImgStyled {...props} />

export default Image
