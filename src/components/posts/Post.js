import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ match }) => {
  console.log(match.params.id);

  return (
    <div>
      Post works
    </div>
  )
}

Post.propTypes = {

}

export default Post
