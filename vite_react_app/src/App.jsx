import React from 'react'
import HeroSection from './components/views/homeViews/HeroSection'
import Testimonials from './components/views/homeViews/Testimonials'
import Featured from './components/views/homeViews/Featured'
import DynamicTestimonials from './components/views/homeViews/DynamicTestimonials'
import TopSellerWrapper from './components/views/homeViews/TopSellerWrapper'
import TopSellerCard from './components/views/homeViews/TopSellerCard'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

const App = () => {
  return (
    <>
      {/* single page routing */}
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App