import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDetails from './Pages/ProductDetails'
import AboutUs from "./Pages/About";
import Contact from "./Pages/Contact";
import './App.css'
import Footer from "./components/Footer";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path= '/' element={<Home />} />
        <Route path= '/shop' element={<Shop />} />
        <Route path= '/shop/:id' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  )
}
