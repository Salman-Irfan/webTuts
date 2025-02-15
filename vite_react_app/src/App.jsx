import React from 'react'
import HeroSection from './components/views/homeViews/HeroSection'
import Testimonials from './components/views/homeViews/Testimonials'
import Featured from './components/views/homeViews/Featured'

const App = () => {
  return (
    <>
      <HeroSection />
      <Testimonials />
      <Featured />
    </>
  )
}

export default App