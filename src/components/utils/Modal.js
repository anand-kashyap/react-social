import React, { useEffect, useRef, useContext, useState } from 'react';
import { M } from './Shared';
import './Modal.scss';
import postContext from '../../context/post/postContext';
const Modal = ({ bottom = false, dismiss = true, options = null, id = 'modal1', opened = false, closed }) => {
  let modalRef = useRef();
  const [isMobile, setMobile] = useState(false),
    [isSaved, setSaved] = useState(false),
    { addNew } = useContext(postContext),
    [text, setText] = useState(''),
    mainClass = bottom ? 'bottom-sheet' : null;
  const Post = () => {
    setSaved(true);
    addNew(text, 'test_user');
    setText('');
  };
  if (!options) {
    options = {
      inDuration: 250,
      outDuration: 350,
      onCloseEnd() {
        console.log('text', isSaved);
        closed(isSaved);
        setSaved(false);
        // console.log('close End');
      },
      opacity: 0.5,
      startingTop: "4%",
      endingTop: "10%"
    };
  }
  options.dismissible = dismiss;
  useEffect(() => {
    M.Modal.init(modalRef, options);
    setMobile(window.screen.width <= 600);
    // eslint-disable-next-line
  }, []);
  const setContent = e => {
    setText(e.target.value);
  }

  const textboxKeyPress = (e) => {
    setMobile(window.screen.width <= 600);
    if (isMobile) {
      return;
    }
    const { keyCode: key, ctrlKey, shiftKey } = e;
    if ([10, 13].includes(key)) { // for mac, linux and win 'enter'
      if (shiftKey) {
        return;
      }
      if (ctrlKey) {
        e.target.value += "\n";
        return;
      }
      e.preventDefault();
      M.Modal.getInstance(modalRef).close();
      Post();
    }
  };

  return (
    <div
      ref={Modal => modalRef = Modal}
      id={id}
      className={'modal ' + mainClass}
    >
      <div className="modal-content">
        <h5>Create Post</h5>
        <textarea onKeyDown={textboxKeyPress} ref={tref => tref && opened ? tref.focus() : null} placeholder="Share something..." value={text} onChange={setContent}></textarea>
      </div>
      <div className="modal-footer">
        {!isMobile && <span><strong>Return</strong> to send. <strong>Shift + return</strong> to add new line</span>}
        <p onClick={() => setText('')} className="modal-close waves-effect waves-red btn-flat">
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
