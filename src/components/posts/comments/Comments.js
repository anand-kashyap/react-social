import React from 'react'
import { useParams } from 'react-router-dom'

import './Comments.scss';

const Comments = () => {
  const { postId } = useParams();
  return (
    <div className="com-box">
      works comm {postId}
    </div>
  )
}

export default Comments
