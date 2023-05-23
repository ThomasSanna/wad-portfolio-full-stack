import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';


function App() {
  return (
    <div>
      <Header />
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
