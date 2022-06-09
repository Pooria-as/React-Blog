import React from 'react'
import styled from 'styled-components'
import home_1_image from '../../img/home1.png'
const AboutSection = () => {
  return (
    <About_section>
      <div className='description'>
        <div className='title'>
          <div className='first-headLine hide'>
            <h2>We Work to make</h2>
          </div>
          <div className='second-headLine hide'>
            <h2>
              Your <span>Dreams</span>
            </h2>
          </div>
          <div className='third-headLine hide'>
            <h2>Come True</h2>
          </div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable .
          </p>
          <ContactUsButton>
            <button>Contact us</button>
          </ContactUsButton>
        </div>
      </div>
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
