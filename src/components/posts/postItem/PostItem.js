import DropDown from 'components/utils/dropdown/DropDown';
import commentContext from 'context/comment/context';
import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { actions, cardTitle, date, textCont } from './PostItem.module.scss';

const PostItem = ({ data: { text, id, hasImage, imageUrl, createdBy, createdAt }, selectedDrop }) => {
  // eslint-disable-next-line
  const { setInit } = useContext(commentContext);
  const dropOptions = [
    { val: 'one', icon: 'all_out' }, { val: 'delete', icon: 'delete' }];
  useEffect(() => {
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

  /* const openCommentBox = () => {
    console.log('open comments for post: ', id);
    setInit(id);
  }; */

  return (
    <div className="card hoverable">
      <DropDown id={id} dropOpts={dropOptions} selOpt={selectedDrop} />
      <div className="card-content">
        <div className={cardTitle}>
          <i className="material-icons-outlined">account_circle</i>
          <Link to={`/user/${createdBy}`}>{createdBy}</Link>
          <p className={date}>{formatDate(createdAt)}</p>
        </div>
        <p className={textCont}>{text}</p>
      </div>
      <div className={actions + ' card-action'}>
        <button className='waves-effect btn-flat'>Like</button>
        <Link to={`/comments/${id}`} className='waves-effect btn-flat'>Comment</Link>
        {/* <button onClick={openCommentBox} className='waves-effect btn-flat'>Comment</button> */}
        {/* <Link to="/">Share</Link> */}
      </div>
    </div>
  )
}

PostItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PostItem
