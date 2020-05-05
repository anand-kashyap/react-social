import { M } from 'utils/Shared';
import CommentContext from 'context/comment/context';
import React, { useContext, useEffect, useRef } from 'react';
import './CModal.scss';

const CModal = () => {
  let modal2Ref: any = useRef();
  const { init, setInit } = useContext(CommentContext);

  useEffect(() => {
    init &&
      M.Modal.init(modal2Ref, {
        onCloseStart() {
          setInit(null);
        },
      }).open();
    console.log('openeddd', init);
  }, [init, setInit]);
  return (
    init && (
      <div
        ref={(Modal) => (modal2Ref = Modal)}
        id={'modal' + init}
        className='modal bottom-sheet comment-modal'
      >
        <div className='modal-content'>works for post: {init}</div>
        <div className='modal-footer'></div>
      </div>
    )
  );
};

export default CModal;
