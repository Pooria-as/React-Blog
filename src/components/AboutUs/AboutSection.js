import React from 'react'
import styled from 'styled-components'
import home_1_image from '../../img/home1.png'
import { motion } from 'framer-motion'
const AboutSection = () => {
  const Animated = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, transition: { duration: 2 }, x: 0, delayChildren: 0.5 }
  }

  return (
    <About_section>
      <motion.div
        variants={Animated}
        initial='hidden'
        animate='show'
        className='description'
      >
        <div className='title'>
          <div className='first-headLine hide'>
            <motion.h2>We Work to make</motion.h2>
          </div>
          <div className='second-headLine hide'>
            <motion.h2>
              Your <span>Dreams</span>
            </motion.h2>
          </div>
          <div className='third-headLine hide'>
            <motion.h2>Come True</motion.h2>
          </div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable .
          </p>
          <ContactUsButton>
            <button>Contact us</button>
          </ContactUsButton>
        </div>
      </motion.div>
      <div className='image'>
        <img src={home_1_image} />
      </div>
    </About_section>
  )
}

const About_section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  h2 {
    color: white;
    font-size: 1.8rem;
    margin: 1.2rem;
  }
  span {
    color: green;
  }
  img {
    width: 34vw;
    margin: 2rem;
  }
  p {
    color: white;
    margin: 1.3rem;
  }
`

const ContactUsButton = styled.div`
  text-align: center;

  button {
    font-weight: bold;
    border: 1px solid green;
    background-color: transparent;
    padding: 1rem 2rem;
    border-radius: 2%;
    font-size: 1rem;
    cursor: pointer;
    transition: all 1s;
    color: white;
    &:hover {
      background-color: #00ff00;
      color: black;
    }
  }
`

export default AboutSection
