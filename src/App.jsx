import React from 'react'
import Navbar from './components/Client/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Client/Footer'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
