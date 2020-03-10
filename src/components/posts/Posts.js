import React, { Fragment, useState, useEffect, useContext } from 'react'
import PostItem from './PostItem'
import Modal from '../utils/Modal';
import postContext from '../../context/post/postContext';

const Posts = props => {
  const modalId = 'modal1';
  const { posts } = useContext(postContext);
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
      <div className="row flexed">
        {posts.map(post => (
          <PostItem key={post.id} data={post} />
        ))}
      </div>
    </Fragment>
  )
}

export default Posts
