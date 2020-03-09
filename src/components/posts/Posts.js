import React, { Fragment, useState, useEffect } from 'react'
import PostItem from './PostItem'
import posts from '../../mockData/posts';
import Modal from '../utils/Modal';

const Posts = props => {
  const modalId = 'modal1';
  const [scale, setScale] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setScale('scale-in');
    }, 350);
  }, []);

  return (
    <Fragment>
      <Modal bottom={true} id={modalId} />
      <div className="fixed-action-btn">
        <button data-target={modalId} className={`btn-floating btn-large red waves-effect waves-circle waves-light modal-trigger scale-transition scale-out ${scale}`}>
          <i className="large material-icons-outlined">add</i></button>
      </div>
      <div className="row">
        {posts.map(post => (
          <PostItem key={post.id} data={post} />
        ))}
      </div>
    </Fragment>
  )
}

export default Posts
