import React, { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import './Comments.scss';
import commentContext from 'context/comment/context';

const Comments = () => {
  const { postId } = useParams();
  const { comments, getCommentsByPostId } = useContext(commentContext);

  useEffect(() => {
    getCommentsByPostId(postId);
    // eslint-disable-next-line
  }, []);

  return <div className="comments-parent">
    <div className="com-container">
      {comments.map(v => (
        <div key={v.id} className="card comment-card">
          <div className="card-content">
            <Link to={`/user/${v.user}`} className='username'>{v.user}</Link>
            <p>{v.text}</p>
            <div className="com-actions">
              <div className="date">
                <p>Date</p></div>
              <div className="interact-btns">
                <button className="waves-effect btn-flat">Like</button>
                <button className="waves-effect btn-flat">Reply</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="com-box">
      <input type='text' className="add-comment" placeholder="Add a comment" />
    </div>
  </div>
}

export default Comments
