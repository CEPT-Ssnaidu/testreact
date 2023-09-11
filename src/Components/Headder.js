import React from 'react'
import { Routes, Route, } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Layouts from './Layouts'
import Errorpage from './Errorpage'
export default function Headder (){
  return (
    
    <div>
      <Routes>
      <Route path="/" element={<Layouts />} />
      <Route index element = {<Home />}/>
       <Route path="about" element ={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Errorpage />} />

        </Routes>

       {/* <NavLink to="/">Home</NavLink>
       <NavLink to="/about">About</NavLink>
       <NavLink to="/contact">Contact</NavLink> */}

        </div>
  
  )
}
