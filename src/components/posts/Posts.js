import React, { Fragment } from 'react'
import PostItem from './PostItem'
import posts from '../../mockData/posts';
import Modal from '../utils/Modal';

const Posts = props => {
  return (
    <Fragment>
      <Modal bottom={true} />
      <div className="fixed-action-btn">
        <button data-target="modal1" className="btn-floating btn-large red waves-effect waves-circle waves-light modal-trigger">
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
