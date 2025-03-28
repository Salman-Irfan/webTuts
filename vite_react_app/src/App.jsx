import React, { useState } from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import PageNotFound from './components/pages/PageNotFound'
import UseEffectDemo from './components/pages/UseEffectDemo'
import FreeJsonApis from './components/pages/FreeJsonApis'
import AddGroceryItem from './components/pages/AddGroceryItem'
import AllGroceryItems from './components/pages/AllGroceryItems'
import SpecificGroceryItem from './components/pages/dynamicPages/SpecificGroceryItem'
import UpdateProductById from './components/pages/dynamicPages/UpdateProductById'
import Signup from './components/pages/auth/SignUp'
import Login from './components/pages/auth/Login'
import Dashboard from './components/pages/Dashboard';

const App = () => {
  const [count, setCount] = useState(10)
  
  const handleIncrement = () => {
    setCount(count+1)
  }
  return (
    <>
      {/* single page routing */}
      {count}
      <button onClick={handleIncrement}>Increment</button>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/use-effect-demo' element={<UseEffectDemo/>} />
        <Route exact path='/free-json-apis' element={<FreeJsonApis/>} />
        <Route exact path='/add-grocery-item' element={<AddGroceryItem />} />
        <Route exact path='/all-grocery-items' element={<AllGroceryItems />} />
        <Route exact path='/product/:id' element={<SpecificGroceryItem />} />
        <Route exact path='/update-product/:id' element={<UpdateProductById />} />

        <Route exact path='/auth/signup' element={<Signup />} />
        <Route exact path='/auth/login' element={<Login />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        
        <Route exact path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>
      {/* ✅ ToastContainer for toast notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable
      />
    </>
  )
}

export default App