import React from 'react'
import styled from 'styled-components'

export default styled.button`
  display: block;
  padding: 0.5rem 1.25rem;
  background: ${(props) => props.background || '#D7FF00'};
  color: ${(props) => props.textColor || '#0A0A0A'};
  border: 1px solid ${(props) => props.background || '#D7FF00'};
  border-radius: 1rem;
  text-transform: uppercase;
  font-size: 0.65rem;
  font-weight: bold;
  cursor: pointer;
  transition: background, color, border-color, padding, 700ms;
  outline: none;
  &:hover {
    background: ${(props) => props.textColor || '#0A0A0A'};
    color: ${(props) => props.background || '#D7FF00'};
  }
  img {
    vertical-align: text-bottom;
    margin-left: 1rem;
  }
  &.continue {
    width: 8rem;
    height: 2rem;
  }
`
