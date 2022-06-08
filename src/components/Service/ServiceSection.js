import React from 'react'
import Clock from '../../img/clock.svg'
import diaphgram from '../../img/diaphragm.svg'
import money from '../../img/money.svg'
import teamwork from '../../img/teamwork.svg'
import home2 from '../../img/home2.png'
const ServiceSection = () => {
  return (
    <div className='Service'>
      <div className='Service_description'>
        <div className='Service_description_title'>
          <h2>High quality Service</h2>
        </div>
        <div className='Cards'>
          <div className='card'>
            <div className='icon'>
              <img src={Clock} alt='clock' />
              <h3>ClOCK</h3>
            </div>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={diaphgram} alt='diaphgram' />
              <h3>diaphgram</h3>
            </div>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={money} alt='money' />
              <h3>money</h3>
            </div>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={teamwork} alt='teamwork' />
              <h3>teamwork</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='Service_image'>
        <img src={home2} alt='home2' />
      </div>
    </div>
  )
}

export default ServiceSection
