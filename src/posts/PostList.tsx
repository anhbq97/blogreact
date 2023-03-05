import React, { useState, useEffect } from "react";
import { Post } from './Post';
import PostCard from './PostCard';
import PostForm from './PostForm';
import { postAPI } from './PostAPI';
import { Spinner, Alert } from 'react-bootstrap';
import Paginates from './Paginates';
import { Paginate } from './Paginate';


interface ProjectListProps {
}

function ProjectList() {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});
  // const handleEdit = (post: Post) => {
  //   setProjectBeingEdited(post);
  // };
  const cancelEdit = () => {
    setProjectBeingEdited({});
  }

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginates, setPaginates] = useState<Paginate>(Object);

  // const savePost = (post: Post) => {
  //   let updatedPost = posts.map((p: Post) => {
  //     return p.id === post.id ? post : p;
  //   });
  //   setPosts(updatedPost);
  // }

  const handleLoadPage = (id: any) => {
    setCurrentPage(id);
  }

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
          console.log('s');
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
        <div className="row">{posts.map((post) => (
          <div key={post.id} className="col-md-4">
            {
              post === projectBeingEdited ? ( <PostForm post={post} onCancel={cancelEdit}/> ) : ( <PostCard post={post} /> )
            }
          </div>
          ))}
        </div>
        <Paginates paginates={paginates} loadPage={handleLoadPage}/>
      </> }
    </>
  );
  
}

export default ProjectList;