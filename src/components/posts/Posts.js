import React, { Fragment } from 'react'
import PostItem from './PostItem'
import posts from '../../mockData/posts';

const Posts = props => {
  return (
    <Fragment>
      <button className="waves-effect blue waves-light btn">Add Post</button>
      <div className="row">
        {posts.map(post => (
          <PostItem key={post.id} data={post} />
        ))}
      </div>
    </Fragment>
  )
}

export default Posts
