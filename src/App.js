// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página inicial com lista de restaurantes */}
        <Route path="/" element={<Home />} />

        {/* Página de detalhes/menu de um restaurante */}
        <Route path="/restaurante/:id" element={<Menu />} />

        {/* Página de checkout (etapa final) */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
