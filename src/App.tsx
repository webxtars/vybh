// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import Event from './pages/Event'

function App() {

  return (

   <>
   <Navbar/>
   <Routes>
    <Route path='' element={<LandingPage/>}/>
    <Route path='/event' element={<Event/>}/>
   </Routes>
   </>
  )
}

export default App
