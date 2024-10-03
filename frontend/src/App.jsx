import React from 'react'
import { SolutionProvider } from './context/SolutionContext'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <SolutionProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </SolutionProvider>
    </>
  )
}

export default App
