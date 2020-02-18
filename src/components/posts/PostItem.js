import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const PostItem = ({ data: { title, text, id, hasImage, imageUrl, createdBy, createdAt } }) => {
  return (
    <div className="col s12 l6">
      <div className="card">
        <div className="card-content">
          <Link to={`/post/${id}`} className="card-title">{title}</Link>
          <p>{text}</p>
        </div>
        <div className="card-action">
          <Link to="/">More</Link>
          <Link to="/">Share</Link>
        </div>
      </div>
    </div>
  )
}

PostItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PostItem
