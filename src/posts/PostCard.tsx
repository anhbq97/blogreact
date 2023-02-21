import { Post } from './Post';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';


function formatDescription(description: string): string {
  return description.substring(0, 200) + '...';
}

interface ProjectCardProps {
  post: Post;
  // onEdit: (post: Post) => void;
}

function ProjectCard(props: ProjectCardProps) {
  const { post } = props;
  // const handleEditClick = (postBeingEdited: Post) => {
  //   onEdit(postBeingEdited);
  // };

  return (
    <div className="card box-post">
      
      <Link to={'/post/' + post.title_tag} className="button rounded">
        <img className="card-img-top" width={360} height={360} src={post.image ? post.image : process.env.PUBLIC_URL + 'logo512.png'} alt={post.title_tag} />
      </Link>
      <div className="card-body" style={{height: 270}}>
        <div className="card-info">
          <small><FontAwesomeIcon icon={faCalendar} style={{fontSize: 11}} /> Ngày tạo: {post.created_at.toLocaleString('en-US', { timeZone: 'UTC' })}</small>
          <small className="card-author"><FontAwesomeIcon icon={faUser} /> {post.user.name}</small>
          <div className="clearfix" />
        </div>
        <p className="card-title">
          <Link to={'/post/' + post.title_tag} className="button rounded card-tag">
            {post.title}
          </Link>
        </p>
        <p className="card-summary">{formatDescription(post.summary)}</p>
        <p className="card-readmore">
          <Link to={'/post/' + post.title_tag} className="button rounded card-tag">
            Đọc tiếp <i className="fa-solid fa-angles-right" />
          </Link>
        </p>
      </div>
    </div>


    // <div className="card">
    //   <img src={post.imageUrl} alt={post.name}/>
    //   <section className="section dark">
    //     <h5 className="strong">
    //       <strong>{post.name}</strong>
    //     </h5>
    //     <p>{formatDescription(post.description)}</p>
    //     <p>Budget: {post.budget.toLocaleString()}</p>
    //     <button className="bordered"
    //       onClick={() => {
    //         handleEditClick(post);
    //       }}
    //     >
    //       <span className="icon-edit " />
    //       Edit
    //     </button>
    //   </section>
    // </div>
  );
}

export default ProjectCard;