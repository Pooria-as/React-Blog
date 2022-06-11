import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { MovieContextStore } from '../../Context/MovieContext'
import { MOVIES_URL } from '../../utilities/Url'
import Racer from '../../img/the-racer2.jpg'
import goodtimes2 from '../../img/good-times2.jpg'
import athlete from '../../img/athlete-small.png'
import athlete2 from '../../img/athlete2.png'

const Single = () => {
  const store = useContext(MovieContextStore)
  const { id } = useParams()
  const [movie, SetMovie] = useState([])
  useEffect(() => {
    const getMovie = async () => {
      const data = await axios.get(MOVIES_URL + `/${id}`).then(res => res.data)
      SetMovie(data)
    }
    getMovie()
  }, [])

  const { title } = movie
  return (
    <SingleMovie>
      <h1>{title}</h1>
      <div className='line'></div>
      <img src={id === 1 ? athlete : athlete2} width={`100%`} />

      <Awards>
        {!movie.awards == 0
          ? movie.awards.map(({ title, description }) => (
              <Award>
                <div className='award-title'>
                  <h4>{title}</h4>
                </div>
                <div className='line'></div>
                <div className='award-Text'>
                  <p>{description}</p>
                </div>
              </Award>
            ))
          : null}
      </Awards>

      <img src={id == 1 ? Racer : goodtimes2} width={`100%`} />
    </SingleMovie>
  )
}

const SingleMovie = styled.div`
  text-align: center;
  margin: 2rem;
  h1,
  h4,
  p {
    color: white;
  }
  .line {
    height: 0.4rem;
    background-color: green;
  }
  img {
    margin-bottom: 4rem;
  }
`
const Awards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const Award = styled.div`
  width: 40vh;
  height: 30vh;
  margin: 4rem;
  /* background-color: red; */

  .line {
    background-color: green;
    height: 0.3rem;
    margin: 1rem;
  }
`

export default Single
