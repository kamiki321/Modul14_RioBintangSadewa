import './App.css';
import React from 'react';
import Title from './components/title';
import Footer from './components/footer';
import Body from './components/body';
import {Route, Routes} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Navbar from "./pages/Navbar"



export default function App() {
  return (
    // <div className="App">
    //     <Title />
    //     <Body />
    //     <Footer />
    // </div>
    <div className="App">
      <Title />
      <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      <hr />  
      <Footer />
        </div>
  )
}






