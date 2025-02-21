import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./src/Pages/Home";
import Checkout from "./src/Pages/Checkout";
import Cart from "./src/Pages/Cart";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />

      </Routes> 
    </Router>
  );
};

export default App; 
