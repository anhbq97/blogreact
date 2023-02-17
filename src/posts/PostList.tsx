import React, { useState } from "react";
import { Post } from './Post';
import PostCard from './PostCard';
import PostForm from './PostForm';


interface ProjectListProps {
  posts: Post[];
  onSave: (post: Post) => void;
}

function ProjectList({ posts, onSave }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});
  // const handleEdit = (post: Post) => {
  //   setProjectBeingEdited(post);
  // };
  const cancelEdit = () => {
    setProjectBeingEdited({});
  }

  const items = posts.map((post) => (
    <div key={post.id} className="col-md-4">
      {
        post === projectBeingEdited ? ( <PostForm post={post} onSave={onSave} onCancel={cancelEdit}/> ) : ( <PostCard post={post} /> )
      }
    </div>
  ));

  return (
    <div className="row">{items}</div>
  );
}

export default ProjectList;