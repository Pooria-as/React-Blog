import React from 'react'
import home_1_image from '../../img/home1.png'
const AboutSection = () => {
  return (
    <div className='About_section'>
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
          <p>test test test</p>
          <div className='contact_us btn '>
            <button>Contact us</button>
          </div>
        </div>
        <div className='image'>
          <img src={home_1_image} />
        </div>
      </div>
    </div>
  )
}

export default AboutSection
