import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import CarDetails from './pages/CarsDetails'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const isownerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
      {!isownerPath && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        <Route path='/' element={<Home/>} />  
        <Route path='/car-details/:id' element={<CarDetails/>} />  
        <Route path='/cars' element={<Cars/>} />  
        <Route path='/my-bookings' element={<MyBookings/>} />  
        
      </Routes>

    </>
  )
}

export default App