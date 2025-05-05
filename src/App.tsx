// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'

function App() {

  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='' element={<LandingPage/>}/>
   </Routes>
   </>
  )
}

export default App
