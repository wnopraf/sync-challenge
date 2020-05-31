import React from 'react'
import styled from 'styled-components'

export const NavFooter = ({ links }) => {
  return (
    <Ul>
      {links.map((e, i) => {
        return (
          <li>
            <Link key={i}>{e}</Link>
          </li>
        )
      })}
    </Ul>
  )
}

const Ul = styled.ul`
  display: flex;
  li:not(:last-child):after {
    content: '|';
  }
  li:last-child > a {
    padding-right: 0;
  }
`
const Link = styled.a`
  padding: 0.5rem 1rem;
  cursor: pointer;
`
