import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GlobalStyle from '../components/GlobalStyle/GlobalStyle'
import Nav from '../components/Nav/Nav'

import AboutUs from '../Pages/AboutUs'
import ContactUs from '../Pages/ContactUs'
import Work from '../Pages/Work'
const AppRouter = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/About-us' element={<AboutUs />} />
        <Route path='/Contact-us' element={<ContactUs />} />
        <Route path='/Works' element={<Work />} />
      </Routes>
    </div>
  )
}

export default AppRouter
