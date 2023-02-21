import React, { useState, useEffect } from "react";
// import { MOCK_POST } from "./MockPosts";
import PostList from "./PostList";
import { Post } from "./Post";
import { postAPI } from './PostAPI';
import { Button, Spinner, Alert } from 'react-bootstrap';
import Paginates from './Paginates';
import { Paginate } from './Paginate';

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

  // const handleMoreClick = () => {
  //   setCurrentPage((currentPage) => currentPage + 1);
  // };
    

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      try {
        const data = await postAPI.get(currentPage);
        setError('');
        // setPosts(data[0]);
        if (currentPage === 1) {
          setPosts(data[0]);
          setPaginates(data[1]);
        } else {
          setPosts(data[0]);
          // setPosts((posts) => [...posts, ...data[0]]);
          setPaginates(data[1]);
        }
      }
        catch (e) {
          if (e instanceof Error) {
            setError(e.message);
          }
        } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, [currentPage]);

  return (
    <>
      {error && (<div className="row mt-5">
        <div className="">
          <Alert className="card" key='danger' variant='danger'>
            <p>{error}</p>
          </Alert>
        </div>
      </div>)}

      { loading ? (
      <div className="row mt-5 mb-md-5 mb-xs-3">
        <div className="text-center large">
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </div>
      </div>
      ) : 
      <>
        <PostList onSave={savePost} posts={posts}/>
        <Paginates paginates={paginates} loadPage={handleLoadPage}/>
      </> }
    </>
  )
}

export default ProjectsPage;