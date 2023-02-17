import React, { SyntheticEvent, useState } from 'react';
import { Post } from './Post';

interface ProjectFormProps {
  post: Post;
  onSave: (post: Post) => void;
  onCancel: () => void;
}


function ProjectForm({ post: initialProject, onSave, onCancel }: ProjectFormProps) {
  const [post, setPost] = useState(initialProject);
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSave(post);
  }
  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;
    let updatedValue = type === 'checkbox' ? checked : value;
    //if input type is number convert the updatedValue string to a +number
    if (type === 'number') {
      updatedValue = Number(updatedValue);
    }
    const change = {
      [name]: updatedValue,
    };

    let updatedPost: Post;
    setPost((p) => {
      updatedPost = new Post({ ...p, ...change });
      return updatedPost;
    });
  }

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Project Name</label>
      <input type="text" name="name" placeholder="enter name" value={post.title} onChange={handleChange}/>
      <label htmlFor="description">Project Description</label>
      <textarea name="description" placeholder="enter description" value={post.title} onChange={handleChange}/>
      <label htmlFor="budget">Project Budget</label>
      <input type="number" name="budget" placeholder="enter budget" value={post.title} onChange={handleChange}/>
      <label htmlFor="isActive">Active?</label>
      {/* <input type="checkbox" name="isActive" checked={post.title} onChange={handleChange} /> */}
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button type="button" className="bordered medium" onClick={onCancel}>cancel</button>
      </div>
    </form>
  )
}

export default ProjectForm;