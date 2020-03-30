import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { M } from '../../utils/Shared';

import { cardTitle, date, actions, textCont } from './PostItem.module.scss';
const PostItem = ({ data: { title, text, id, hasImage, imageUrl, createdBy, createdAt }, selectedDrop }) => {
  let dropbRef = useRef();
  const dropOpts = [
    { val: 'one', icon: 'all_out' }, { val: 'delete', icon: 'delete' }];
  useEffect(() => {
    M.Dropdown.init(dropbRef, { alignment: 'right', autoTrigger: false, coverTrigger: false });
    // console.log('id', createdBy, id);
  }, []);

  const formatDate = (dtStr) => {
    const d = new Date(dtStr);
    return new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }).format(d);
  };

  return (
    // <div className="col s12">
    <div className="card hoverable">
      <button ref={bref => dropbRef = bref} className="dropdown-trigger btn-flat more-details" data-target={'dropdown' + id}>
        <i className="material-icons-outlined">more_horiz</i>
      </button>
      <ul id={'dropdown' + id} className='dropdown-content'>
        {dropOpts.map(({ val, icon }) => (
          <li key={val}>
            <button onClick={() => selectedDrop(val)} className="drop-item">
              <i className="material-icons-outlined">{icon}</i> <span>{val}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="card-content">
        <div className={cardTitle}>
          <i className="material-icons-outlined">account_circle</i>
          <Link to={`/user/${createdBy}`}>{createdBy}</Link>
          <p className={date}>{formatDate(createdAt)}</p>
        </div>
        <p className={textCont}>{text}</p>
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
