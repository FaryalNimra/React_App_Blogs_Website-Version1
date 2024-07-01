import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Review from './components/Review';
import Singleblogpost from './components/Singleblogpost'; 
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Singleblogpost" element={<Singleblogpost />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
