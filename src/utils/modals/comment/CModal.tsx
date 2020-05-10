import { M } from 'utils/Shared';
import React, { useEffect, useRef } from 'react';
import './CModal.scss';

const CModal = () => {
  let modal2Ref: any = useRef();

  useEffect(() => {
    M.Modal.init(modal2Ref).open();
  }, []);
  return (
    <div
      ref={(Modal) => (modal2Ref = Modal)}
      id={'modal'}
      className='modal bottom-sheet comment-modal'
    >
      <div className='modal-content'>works for post: {1}</div>
      <div className='modal-footer'></div>
    </div>
  )
};

export default CModal;
