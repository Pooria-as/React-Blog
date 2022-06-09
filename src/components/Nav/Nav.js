import React from 'react'
import styled from 'styled-components'

const Nav = () => {
  return (
    <nav>
      <BlogNav>
        <div className='Logo'>
          <h4>
            <a>Blogging </a>
          </h4>
        </div>
        <ul>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Our Work</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </BlogNav>
    </nav>
  )
}

const BlogNav = styled.nav`
  background-color: #282828;
  h4{
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
