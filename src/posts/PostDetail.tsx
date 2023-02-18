import React from 'react';
import { Post } from './Post';

interface PostDetailProp {
  post: Post;
}

function PostDetail({post}: PostDetailProp) {
  return (
    <div className="container px-xs-0" id="main-body-content">
      <div className="row px-xs-0">
        <div className="col-md-8 col-sm-12 col-xs-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Blog</a></li>
              <li className="breadcrumb-item active" aria-current="page">Bài viết</li>
            </ol>
          </nav>
          <div className="label-detail-post mb-4">
            <div className="label-detail-post-author">
              <a href="#">{post.user.name}</a>
              <span className="fa-regular fa-clock"> <small>{post.created_at.toLocaleString('en-US', { timeZone: 'UTC' })}</small></span>
            </div>
            <div className="label-detail-post-command">
              <button className="btn btn-primary btn-sm"><i className="fa-regular fa-thumbs-up" /> 0</button>
              <button className="btn btn-warning btn-sm"><i className="fa-regular fa-thumbs-down" /> 0</button>
              <button className="btn btn-secondary btn-sm"><i className="fa-regular fa-comment" /> 0</button>
            </div>
          </div>
          <h2>{post.title}</h2>
          {/* <p>{post.summary}</p> */}
          <div className="post-content">
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>
          <p>Xem thêm:
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;