import React from 'react'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const isownerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
      {!isownerPath && <Navbar setShowLogin={setShowLogin} />}
    </>
  )
}

export default App