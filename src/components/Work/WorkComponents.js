import React, { useContext } from 'react'
import styled from 'styled-components'
import { MovieContextStore } from '../../Context/MovieContext'

import athlete from '../../img/athlete-small.png'
import athlete2 from '../../img/athlete2.png'
import goodSmall from '../../img/goodtimes-small.png'

const WorkComponents = () => {
  const movies = useContext(MovieContextStore)
console.log(movies.Movies)
  return (
    <WorkBaseStyle>
      <Movies>
        <h1>Athlete</h1>
        <div className='line'></div>
        <img src={athlete} alt='athlete' />
      </Movies>

      <Movies>
        <h1>Good Time</h1>
        <div className='line'></div>
        <img src={goodSmall} alt='athlete' />
      </Movies>
      <Movies>
        <h1>Athlete</h1>
        <div className='line'></div>
        <img src={athlete2} alt='athlete' />
      </Movies>
    </WorkBaseStyle>
  )
}

const WorkBaseStyle = styled.div`
  height: 100%;
  margin: 2rem 3rem;
  align-items: center;
  .line {
    height: 0.2rem;
    width: 80vw;
    background-color: white;
    margin: 0.4rem;
  }

  h1 {
    color: white;
  }

  img {
    max-width: 100%;
    margin: 1rem;
  }
`
const Movies = styled.div``

export default WorkComponents
