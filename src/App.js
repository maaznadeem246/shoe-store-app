import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from "./components/home"
import Launch from "./components/launch"
import NewRelease from "./components/newRelease"
import Sale from "./components/sale"
import Product from "./components/product"
import Cart from "./components/cart"
import {ContextProvider} from "./context/provider"
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider>
      <ContextProvider>

      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="newreleases"  >
              <Route path="/" element={<NewRelease />} />
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="launch" >
            <Route path="/" element={<Launch />} />
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="sale"  >
            <Route path="/" element={<Sale />} />
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="cart" element={<Cart />} />
        </Routes>
      </Router>

      </ContextProvider>
    </SnackbarProvider>
  );
}

export default App;
