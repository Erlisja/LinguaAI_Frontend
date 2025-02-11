import { useState } from 'react'
import {Routes, Route} from 'react-router'
import WelcomePage from './pages/WelcomePage'
import './App.css'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import LanguageSelection from './pages/LanguageSelection'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/language-selection" element={<LanguageSelection />} />
      </Routes>
      
    </>
  )
}

export default App
