import React from 'react'
import styled from 'styled-components'
import Clock from '../../img/clock.svg'
import diaphgram from '../../img/diaphragm.svg'
import money from '../../img/money.svg'
import teamwork from '../../img/teamwork.svg'
import home2 from '../../img/home2.png'
import { Image } from '../styles/GeneralStyles'
const ServiceSection = () => {
  return (
    <Service>
      <Image>
        <img src={home2} alt='home2' />
      </Image>
      <ServiceDescription>
        <ServiceDescriptionTitle>
          <h2>
            High <span>Quality</span> Service
          </h2>
        </ServiceDescriptionTitle>
        <Cards>
          <Card>
            <Icon>
              <img src={Clock} alt='clock' />
              <h3>ClOCK</h3>
              <p>test test test testing</p>
            </Icon>
          </Card>
          <Card>
            <Icon>
              <img src={diaphgram} alt='diaphgram' />
              <h3>diaphgram</h3>
              <p>test test test testing</p>
            </Icon>
          </Card>
          <Card>
            <Icon>
              <img src={money} alt='money' />
              <h3>money</h3>
              <p>test test test testing</p>
            </Icon>
          </Card>
          <Card>
            <Icon>
              <img src={teamwork} alt='teamwork' />
              <h3>teamwork</h3>
              <p>test test test testing</p>
            </Icon>
          </Card>
          <Card>
            <Icon>
              <img src={teamwork} alt='teamwork' />
              <h3>teamwork</h3>
              <p>test test test testing</p>
            </Icon>
          </Card>
          <Card>
            <Icon>
              <img src={teamwork} alt='teamwork' />
              <h3>teamwork</h3>
              <p>test test test testing</p>
            </Icon>
          </Card>
        </Cards>
      </ServiceDescription>
    </Service>
  )
}

const Service = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const ServiceDescription = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
`
const ServiceDescriptionTitle = styled.div`
  h2 {
    font-size: 3rem !important;
    color: white;
    margin-bottom: 4rem;
    span {
      color: green;
    }
  }
`

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40vw;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  margin:2rem;

`

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  h3 {
    color: white;
    padding: 1rem;
  }
  p {
    color: white;
    text-align: center;
  }
`

export default ServiceSection
