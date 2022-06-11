import React from 'react'
import { motion } from 'framer-motion'
import { PageAnimation } from '../components/Animate/Animation'
import styled from 'styled-components'

const ContactUs = () => {
  return (
    <Contact variants={PageAnimation} initial='hidden' animate='show' end='end'>
      <h2>ContactUs</h2>
      <ul>
        <li>
          <h4>Tell : 09128633142</h4>
        </li>
        <li>
          <h4>Email : p.asiabi@gmail.com</h4>
        </li>
        <li>
          <h4>Tell : 02122005469</h4>
        </li>
      </ul>
    </Contact>
  )
}

const Contact = styled(motion.div)`

text-align: center;
h2{
  color: white;
  font-size: 4rem;
}
ul{
  list-style: none;
  li{
    color:white
  }
}
`

export default ContactUs
