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
import Cart from "./Pages/Cart";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path= '/' element={<Home />} />
        <Route path= '/products' element={<Shop />} />
        <Route path= '/about' element={<AboutUs />} />
        <Route path= '/products/:id' element={<ProductDetails />} />
        <Route path= '/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  )
}
