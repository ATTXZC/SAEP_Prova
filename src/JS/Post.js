import React from 'react';
import likeIcon from '../icons/flecha_cima_cheia.svg';
import dislikeIcon from '../icons/flecha_baixo_cheia.svg';
import dislikeIcon2 from '../icons/flecha_cima_vazia.svg';
import dislikeIcon3 from '../icons/flecha_baixo_vazia.svg';
import '../CSS/Post.css';

function Post({ title, location, likes, dislikes, comments, imageUrl }) {
  return (
    <div className="post">
      <img src={imageUrl} alt={title} className="post-image" />
      <div className="post-content">
        <h2 className="post-title">{title}</h2>
        <p className="post-location">{location}</p>
        <div className="post-icons">
          <span><img src={likeIcon} alt="Like" className="icon" /> {likes}</span>
          <span><img src={dislikeIcon} alt="Dislike" className="icon" /> {dislikes}</span>
          <span><img src={dislikeIcon2} alt="Like" className="icon" /> {dislikes}</span>
          <span><img src={dislikeIcon3} alt="Dislike" className="icon" /> {dislikes}</span>
          <span>💬 {comments}</span>
        </div>
      </div>
    </div>
  );
}

export default Post;