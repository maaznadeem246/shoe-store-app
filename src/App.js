import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from "./components/home"
import Launch from "./components/launch"
import {ContextProvider} from "./context/provider"


function App() {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <div style={{height:50,width:'100%'}}></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="newreleases"  >
              <Route path="/" element={<div>New Releases</div>} />
              <Route path=":productId" element={<div>Product Page</div>} />
          </Route>
          <Route path="launch" >
            <Route path="/" element={<Launch />} />
            <Route path=":productId" element={<div>Product Page</div>} />
          </Route>
          <Route path="sale"  >
            <Route path="/" element={<div>Sale</div>} />
            <Route path=":productId" element={<div>Product Page</div>} />
          </Route>
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
