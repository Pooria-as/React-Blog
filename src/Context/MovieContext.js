import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { MOVIES_URL } from '../utilities/Url'
export const MovieContextStore = React.createContext()
const MovieContext = ({ children }) => {
  const [Movies, SetMovies] = useState([])
  useEffect(() => {
    const GetMovies = async () => {
      const movies = await axios.get(MOVIES_URL)
      const data = movies.data
      SetMovies(data)
    }
    GetMovies()
  }, [])

  return (
    <MovieContextStore.Provider
      value={{
        Movies
      }}
    >
      {children}
    </MovieContextStore.Provider>
  )
}

export { MovieContext }
