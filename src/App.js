import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';




function App() {
  return (
    <div >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/newreleases" element={<div>New Releases</div>} />
          <Route path="/sale" element={<div>Sale</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
