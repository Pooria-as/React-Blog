import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutUs from '../Pages/AboutUs'
const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/About-us' element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default AppRouter
