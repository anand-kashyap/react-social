import DropDown from 'utils/dropdown/DropDown';
import commentContext from 'context/comment/context';
import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
const {
  actions,
  cardTitle,
  date,
  textCont,
} = require('./PostItem.module.scss');

const PostItem = ({
  data: { text, id, imageUrl, createdBy, createdAt },
  selectedDrop,
}: any) => {
  // eslint-disable-next-line
  const { setInit } = useContext(commentContext);
  const dropOptions = [
    { val: 'one', icon: 'all_out' },
    { val: 'delete', icon: 'delete' },
  ];
  useEffect(() => {
    // console.log('id', createdBy, id);
  }, []);

  const formatDate = (dtStr) => {
    const d = new Date(dtStr);
    return new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    }).format(d);
  };

  return (
    <div className='card hoverable'>
      <DropDown id={id} dropOpts={dropOptions} selOpt={selectedDrop} />
      <div className='card-content'>
        <div className={cardTitle}>
          <i className='material-icons-outlined'>account_circle</i>
          <Link to={`/user/${createdBy}`}>{createdBy}</Link>
          <p className={date}>{formatDate(createdAt)}</p>
        </div>
        <p className={textCont}>{text}</p>
      </div>
      <div className={actions + ' card-action'}>
        <button className='waves-effect btn-flat'>Like</button>
        <Link to={`/comments/${id}`} className='waves-effect btn-flat'>
          Comment
        </Link>
        {/* <Link to="/">Share</Link> */}
      </div>
    </div>
  );
};

PostItem.propTypes = {
  data: PropTypes.object.isRequired,
  selectedDrop: PropTypes.func.isRequired,
};

export default PostItem;
