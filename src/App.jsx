import { useState } from 'react'
import {Routes, Route} from 'react-router'
import WelcomePage from './pages/WelcomePage'
import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
      
    </>
  )
}

export default App
