import React, { Fragment, useState, useEffect, useContext } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import PostItem from './PostItem';

import Modal from '../utils/Modal';
import postContext from '../../context/post/postContext';

const Posts = props => {
  const modalId = 'modal1';
  const { posts } = useContext(postContext);
  const [scale, setScale] = useState('');
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setScale('scale-in');
    }, 650);
  }, []);

  return (
    <Fragment>
      <Modal bottom={true} id={modalId} opened={opened} closed={() => setOpened(false)} />
      <div className="fixed-action-btn">
        <button onClick={() => { setOpened(true); }} data-target={modalId} className={`btn-floating btn-large red waves-effect waves-circle waves-light modal-trigger scale-transition scale-out ${scale}`}>
          <i className="large material-icons-outlined">add</i></button>
      </div>
      {<TransitionGroup className="row flexed">
        {posts.map((post) => (
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="item">
            <PostItem key={post.id} data={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>}
    </Fragment>
  )
}

export default Posts
