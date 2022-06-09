import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
  return (
    <nav>
      <BlogNav>
        <div className='Logo'>
          <h4>
            <Link to='/About-us'>Blogging</Link>
          </h4>
        </div>
        <ul>
          <li>
            <Link to='/About-us'>About Us</Link>
          </li>
          <li>
            <Link to='/Works'>Our Work</Link>
          </li>
          <li>
  
            <Link to='/Contact-us'>Contact Us </Link>
          </li>
        </ul>
      </BlogNav>
    </nav>
  )
}

const BlogNav = styled.nav`
  background-color: #282828;
  h4 {
    font-size: 1.6rem;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;

  ul {
    display: flex;
    list-style: none;
    li {
      padding: 0.5rem;
    }
  }
`

export default Nav
