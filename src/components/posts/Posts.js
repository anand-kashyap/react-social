import React, { Fragment, useState, useEffect, useContext } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import PullToRefresh from 'react-simple-pull-to-refresh';
import PostItem from './PostItem';
import './Posts.scss'
import { M } from '../utils/Shared';
import Modal from '../utils/Modal';
import postContext from '../../context/post/postContext';

const Posts = props => {
  const modalId = 'modal1';
  const { posts, fetchNewPosts } = useContext(postContext);
  const [scale, setScale] = useState('');
  const [opened, setOpened] = useState(false);
  const onInit = (pull = false) => {
    if (!pull) {
      setScale('');
      setTimeout(() => {
        setScale('scale-in');
      }, 650);
    }
    fetchNewPosts();
  }
  useEffect(onInit, []);

  const viewNew = toast => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toast.dismiss();
  }
  const modalClosed = (posted) => {
    setOpened(false);
    // console.log('text', text);
    if (window.scrollY !== 0 && posted) {
      const ins = M.toast({ classes: 'created-toast', html: '<span>Post created!</span><button class="btn-flat toast-action">View</button>' });
      const toastbtns = document.querySelectorAll('.toast-action');
      const tbtn = toastbtns[toastbtns.length - 1]; // last added
      tbtn.addEventListener('click', () => viewNew(ins));
    }
  };
  return (
    <Fragment>
      <Modal bottom={true} id={modalId} opened={opened} closed={modalClosed} />
      <div className="fixed-action-btn">
        <button onClick={() => { setOpened(true); }} data-target={modalId} className={`btn-floating btn-large red waves-effect waves-circle waves-light modal-trigger scale-transition scale-out ${scale}`}>
          <i className="large material-icons-outlined">add</i></button>
      </div>
      <PullToRefresh isPullable={window.screen.width <= 600} pullDownThreshold={100} maxPullDownDistance={120} onRefresh={() => onInit(true)} pullingContent={
        <div className="cont">
          <i className="small material-icons-outlined down">call_made</i>
          <p>Pull to refresh</p>
        </div>
      } refreshingContent={
        <div className="cont">
          <i className="small material-icons-outlined up">call_made</i>
          <p>Release to refresh</p>
        </div>
      }
        className="loader"
      >
        {<TransitionGroup className="row flexed">
          {posts.map((post) => (
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames={scale && 'item'}>
              <PostItem key={post.id} data={post} />
            </CSSTransition>
          ))}
        </TransitionGroup>}
      </PullToRefresh>
    </Fragment>
  )
}

export default Posts
