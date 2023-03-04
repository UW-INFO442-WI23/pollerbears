import React, { useEffect, useState } from 'react';
import Bills from './components/Bills';
import About from './components/About';
import { NavBar, Footer } from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Bills/>}/>
        <Route exact path='/About' element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
