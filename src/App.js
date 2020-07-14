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
          <Route path="newreleases"  >
              <Route path="/" element={<div>New Releases</div>} />
              <Route path=":productId" element={<div>Product Page</div>} />
          </Route>
          <Route path="launch" >
            <Route path="/" element={<div>Launch</div>} />
            <Route path=":productId" element={<div>Product Page</div>} />
          </Route>
          <Route path="sale"  >
            <Route path="/" element={<div>Sale</div>} />
            <Route path=":productId" element={<div>Product Page</div>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
