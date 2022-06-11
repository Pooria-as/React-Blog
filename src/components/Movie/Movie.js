import React from 'react'
import { Link } from 'react-router-dom'
import athlete from '../../img/athlete-small.png'
import athlete2 from '../../img/athlete2.png'
const Movie = ({ id, title }) => {
  const SingleRoute = `/Work/` + id
  return (
    <div>
      <Link to={SingleRoute}>
        <h1>{title}</h1>
        <div className='line'></div>
        <img src={id == 1 ? athlete : athlete2} alt='athlete' />
      </Link>
    </div>
  )
}

export default Movie
