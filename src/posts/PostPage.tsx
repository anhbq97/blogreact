import React, { useEffect, useState } from 'react';
import { postAPI } from './PostAPI';
import PostDetail from './PostDetail';
import { Post } from './Post';
import { useParams } from 'react-router-dom';

function PostPage(props: any) {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const title_tag = String(params.title_tag);

  useEffect(() => {
    setLoading(true);
    postAPI
      .find(title_tag)
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [title_tag]);

  return (
    <div>
      <>
        <h1>Project Detail</h1>

        {loading && (
          <div className="center-page">
            <span className="spinner primary"></span>
            <p>Loading...</p>
          </div>
        )}

        {error && (
          <div className="row">
            <div className="card large error">
              <section>
                <p>
                  <span className="icon-alert inverse "></span> {error}
                </p>
              </section>
            </div>
          </div>
        )}

        {post && <PostDetail post={post} />}
      </>
    </div>
  );
}

export default PostPage;