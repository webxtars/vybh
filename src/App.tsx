// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import Event from './pages/Event'
import Events from './pages/Events'

function App() {

  return (

   <div className='bg-gray'>
   <Navbar/>
   <Routes>
    <Route path='' element={<LandingPage/>}/>
    <Route path='/event' element={<Event/>}/>
    <Route path='/events' element={<Events/>}/>
   </Routes>
   </div>
  )
}

export default App
