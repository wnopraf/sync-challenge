import React from 'react'
import styled from 'styled-components'
import { FaGooglePlay, FaApple } from 'react-icons/fa'

export const SocialNav = () => (
  <div className="social-nav">
    <Ul>
      <li>
        <Link className="site-link">www.sync.money</Link>
      </li>
      <li>
        <Link>
          <FaGooglePlay />
        </Link>
      </li>
      <li>
        <Link>
          <FaApple />
        </Link>
      </li>
    </Ul>
  </div>
)

const Ul = styled.ul`
  display: flex;
`
const Link = styled.a`
  padding: 0.5rem 1rem;
  cursor: pointer;
  &.site-link  {
    padding-left: 0;
  }
`
