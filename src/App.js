import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from "./components/home"



function App() {
  return (
    <div >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newreleases" element={<div>New Releases</div>} />
          <Route path="/launch" element={<div>Launch</div>} />
          <Route path="/sale" element={<div>Sale</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
