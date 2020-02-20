import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import { cardTitle, date, actions } from './PostItem.module.scss';
const PostItem = ({ data: { title, text, id, hasImage, imageUrl, createdBy, createdAt } }) => {
  return (
    // <div className="col s12">
    <div className="card hoverable">
      <div className="card-content">
        <div className={cardTitle}>
          <i className="material-icons-outlined">account_circle</i>
          <Link to={`/user/${createdBy}`}>{createdBy}</Link>
          <p className={date}>{createdAt}</p>
        </div>
        <p>{text}</p>
      </div>
      <div className={actions + " card-action"}>
        <button className="waves-effect btn-flat">Like</button>
        <Link className="waves-effect btn-flat" to={`/post/${id}`}>Comment</Link>
        {/* <Link to="/">Share</Link> */}
      </div>
    </div>
    // </div>
  )
}

PostItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PostItem
