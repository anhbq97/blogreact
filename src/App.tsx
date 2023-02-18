import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
// import './styles/header.css';

import PostsPage from './posts/PostsPage';
import PostPage from './posts/PostPage';
import Header from './posts/components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/post/:title_tag" element={<PostPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
