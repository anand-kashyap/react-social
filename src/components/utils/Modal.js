import React, { useEffect, useRef, useContext } from 'react';
import { M } from './Shared';
import './Modal.scss';
import postContext from '../../context/post/postContext';
const Modal = ({ bottom = false, dismiss = true, options = null, id = 'modal1' }) => {
  let modalRef = useRef();
  const { addNew } = useContext(postContext);
  let text = ''; let create = false;
  const mainClass = bottom ? 'bottom-sheet' : null;
  const Post = () => {
    // if (create) {
    // send
    addNew(text, 'test_user');
    // }
    console.log('lcoguh')
    // create = false;
    text = '';
  };
  if (!options) {
    options = {
      inDuration: 250,
      outDuration: 350,
      onCloseStart: Post,
      opacity: 0.5,
      startingTop: "4%",
      endingTop: "10%"
    };
  }
  options.dismissible = dismiss;
  useEffect(() => {
    M.Modal.init(modalRef, options);
    // eslint-disable-next-line
  }, []);
  const setContent = e => {
    text = e.target.value;
  }

  return (
    <div
      ref={Modal => {
        modalRef = Modal;
      }}
      id={id}
      className={'modal ' + mainClass}
    >
      <div className="modal-content">
        <h5>Post</h5>
        <textarea autoFocus placeholder="Share something..." onChange={setContent}></textarea>
      </div>
      <div className="modal-footer">
        <p className="modal-close waves-effect waves-red btn-flat">
          Cancel
        </p>
        <p onClick={Post} className="modal-close waves-effect waves-light btn red">
          Post
        </p>
      </div>
    </div>
  );
}

export default Modal
