import React, { Fragment } from 'react'
import PostItem from '../posts/PostItem'
import posts from '../../mockData/posts';

const Feed = props => {
  return (
    <Fragment>
      <button className="waves-effect blue waves-light btn">Add Post</button>
      {posts.map(post => (
        <PostItem key={post.id} data={post} />
      ))}
    </Fragment>
  )
}

export default Feed
