import React, { useEffect, useRef, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { M } from 'components/utils/Shared';
import './Modal.scss';
import postContext from 'context/post/postContext';
interface ModalOpts {
  bottom?: boolean;
  dismiss?: boolean;
  options?: any;
  id?: string;
  opened?: boolean;
  closed: any;
}
const Modal = ({
  bottom = false,
  dismiss = true,
  options = {},
  id = 'modal01',
  opened = false,
  closed,
}: ModalOpts) => {
  let modalRef: any = useRef(),
    isSaved = useRef(false);
  const { addNew } = useContext(postContext),
    [text, setText] = useState(''),
    mainClass = bottom ? 'bottom-sheet' : null;
  const Post = () => {
    isSaved.current = true;
    addNew(text, 'test_user');
    setText('');
  };
  if (!options) {
    options = {
      inDuration: 350,
      outDuration: 350,
      onCloseEnd() {
        closed(isSaved.current);
        isSaved.current = false;
        // console.log('close End');
      },
      opacity: 0.5,
      startingTop: '4%',
      endingTop: '10%',
    };
  }
  options.dismissible = dismiss;
  useEffect(() => {
    M.Modal.init(modalRef, options);
    return () => console.log('ran');
    // eslint-disable-next-line
  }, []);
  const setContent = (e) => {
    setText(e.target.value);
  };

  const textboxKeyPress = (e) => {
    if (window.screen.width <= 600) {
      return;
    }
    const { keyCode: key, ctrlKey, shiftKey } = e;
    if ([10, 13].includes(key)) {
      // for mac, linux and win 'enter'
      if (shiftKey) {
        return;
      }
      if (ctrlKey) {
        e.target.value += '\n';
        return;
      }
      e.preventDefault();
      M.Modal.getInstance(modalRef).close();
      Post();
    }
  };

  return (
    <div
      ref={(Modal) => (modalRef = Modal)}
      id={id}
      className={'modal ' + mainClass}
    >
      <div className='modal-content'>
        <h5>Create Post</h5>
        <textarea
          onKeyDown={textboxKeyPress}
          ref={(tref) => (tref && opened ? tref.focus() : null)}
          placeholder='Share something...'
          value={text}
          onChange={setContent}
        ></textarea>
      </div>
      <div className='modal-footer'>
        <span>
          <strong>Return</strong> to send. <strong>Shift + return</strong> to
          add new line
        </span>
        <p
          onClick={() => setText('')}
          className='modal-close waves-effect waves-red btn-flat'
        >
          Cancel
        </p>
        <p
          onClick={Post}
          className='modal-close waves-effect waves-light btn red'
        >
          Post
        </p>
      </div>
    </div>
  );
};

Modal.propTypes = {
  bottom: PropTypes.bool,
  dismiss: PropTypes.bool,
  options: PropTypes.object,
  id: PropTypes.string,
  opened: PropTypes.bool,
  closed: PropTypes.object,
};
export default Modal;
