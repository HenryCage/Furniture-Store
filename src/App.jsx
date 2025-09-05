import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Homepage/Home";
import Shop from "./Pages/Homepage/Shop";
import AboutUs from "./Pages/Homepage/About";
import Contact from "./Pages/Homepage/Contact";
import './App.css'
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<AboutUs />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
      </Routes>
      <Footer id='contact' />
    </>
  )
}

