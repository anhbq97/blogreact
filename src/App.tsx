import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
// import './styles/header.css';

import PostsPage from './posts/PostsPage';
import ProductsPage from './products/ProductsPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PostsPage />} />
        <Route path="/san-pham/*" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
