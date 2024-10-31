import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Pages/Home/Home"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
function App() {
  return (
    <>
    <div className='App'>
      <Home/>
      <Header/>
      <Footer/>
    </div>
    </>
  )
}

export default App
