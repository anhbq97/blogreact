import React, { useState, useEffect } from "react";
import { MOCK_PRODUCT } from "./MockProducts";
import ProductList from "./ProductList";
import { Product } from "./Product";
// import { postAPI } from './PostAPI';
import { Spinner, Alert } from 'react-bootstrap';
// import Paginates from './Paginates';
// import { Paginate } from './Paginate';

function ProjectsPage() {
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCT);
  // const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [paginates, setPaginates] = useState<Paginate>(Object);

  // const savePost = (post: Post) => {
  //   let updatedPost = posts.map((p: Post) => {
  //     return p.id === post.id ? post : p;
  //   });
  //   setPosts(updatedPost);
  // }

  // const handleLoadPage = (id: any) => {
  //   setCurrentPage(id);
  // }

  // const handleMoreClick = () => {
  //   setCurrentPage((currentPage) => currentPage + 1);
  // };
    

  // useEffect(() => {
  //   async function loadProducts() {
  //     setLoading(true);
  //     try {
  //       // const data = await productAPI.get(currentPage);
  //       setError('');
  //       setProducts(MOCK_PRODUCT);
  //     }
  //       catch (e) {
  //         if (e instanceof Error) {
  //           setError(e.message);
  //         }
  //       } finally {
  //       setLoading(false);
  //     }
  //   }
  //   loadProducts();
  // }, [MOCK_PRODUCT]);

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
        <ProductList products={products}/>
      </> }
    </>
  )
}

export default ProjectsPage;