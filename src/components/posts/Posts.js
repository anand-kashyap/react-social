import React, { Fragment } from 'react'
import PostItem from './PostItem'
import posts from '../../mockData/posts';

const Posts = props => {
  return (
    <Fragment>
      <div className="row">
        <div className="fixed-action-btn">
          <button className="btn-floating btn-large red waves-effect waves-circle waves-light">
            <i className="large material-icons">add</i>
          </button>
        </div>
        {posts.map(post => (
          <PostItem key={post.id} data={post} />
        ))}
      </div>
    </Fragment>
  )
}

export default Posts