import React, { useContext } from 'react'
import styled from 'styled-components'
import { MovieContextStore } from '../../Context/MovieContext'
import Movie from '../Movie/Movie'

const WorkComponents = () => {
  const movies = useContext(MovieContextStore)

  return (
    <WorkBaseStyle>
      {movies.Movies.map(({ id, title, src }) => (
        <Movie id={id} key={id} title={title} src={src} />
      ))}
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
