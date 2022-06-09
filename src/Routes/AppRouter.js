import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GlobalStyle from '../components/GlobalStyle/GlobalStyle'
import Nav from '../components/Nav/Nav'

import AboutUs from '../Pages/AboutUs'
const AppRouter = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/About-us' element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default AppRouter
