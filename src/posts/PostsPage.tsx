import React, { useState, useEffect } from "react";
// import { MOCK_POST } from "./MockPosts";
import PostList from "./PostList";
import PostPage from './PostPage';
import Introduce from '../introduce/IntroducePage';
import { Post } from "./Post";
import { postAPI } from './PostAPI';
import { Spinner, Alert } from 'react-bootstrap';
import Paginates from './Paginates';
import { Paginate } from './Paginate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from '../about/AboutPage';

function ProjectsPage() {
  // const [posts, setPosts] = useState<Post[]>(MOCK_POST);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginates, setPaginates] = useState<Paginate>(Object);

  const savePost = (post: Post) => {
    let updatedPost = posts.map((p: Post) => {
      return p.id === post.id ? post : p;
    });
    setPosts(updatedPost);
  }

  const handleLoadPage = (id: any) => {
    setCurrentPage(id);
  }

  return (
    <div>
      <Header />
      <div className='container mt-md-5 mt-sm-2'>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/bai-viet/:title_tag" element={<PostPage />} />
          <Route path="/gioi-thieu" element={<Introduce />} />
          <Route path="/ve-toi" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default ProjectsPage;