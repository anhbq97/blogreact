import React from 'react';
import { Post } from './Post';
import { User } from '../users/User';

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
          <p>{post.summary}</p>
          <div className="post-content" v-html="post.content">
            {post.content}
          </div>
          <p>Xem thêm:
          </p>
        </div>
      </div>
    </div>

    // <div className="row">
    //   <div className="col-sm-6">
    //     <div className="card large">
    //       <img
    //         className="rounded"
    //         src={post.image}
    //         alt={post.title}
    //       />
    //       <section className="section dark">
    //         <h3 className="strong">
    //           <strong>{post.title}</strong>
    //         </h3>
    //         <p>{post.summary}</p>
    //         <p>Budget : {post.title_tag}</p>

    //         <p>Signed: {post.title}</p>
    //         <p>
    //           <mark className="active">
    //             {' '}
    //             {post.title ? 'active' : 'inactive'}
    //           </mark>
    //         </p>
    //       </section>
    //     </div>
    //   </div>
    // </div>
  );
}

export default PostDetail;