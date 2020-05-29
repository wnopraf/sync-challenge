import React from 'react'
import styled from 'styled-components'

export default styled.button`
  padding: 0.5rem 1.25rem;
  background: ${(props) => props.background || '#D7FF00'};
  color: ${(props) => props.textColor || '#0A0A0A'};
  border: 1px solid ${(props) => props.background || '#D7FF00'};
  border-radius: 1rem;
  text-transform: uppercase;
  font-size: 0.65rem;
  font-weight: bold;
  cursor: pointer;
  transition: background, color, 300ms;
  &:hover {
    background: ${(props) => props.textColor || '#0A0A0A'};
    color: ${(props) => props.background || '#D7FF00'};
  }
  img {
    vertical-align: text-bottom;
    margin-left: 1rem;
  }
`
