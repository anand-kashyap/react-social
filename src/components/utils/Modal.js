import React, { useEffect, useRef } from 'react';
import { M } from './Shared';

const Modal = ({ bottom = false, dismiss = true, options = null, id = 'modal1' }) => {
  let modalRef = useRef();
  const mainClass = bottom ? 'bottom-sheet' : null;
  if (!options) {
    options = {
      inDuration: 250,
      outDuration: 250,
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

  return (
    <div>
      <div
        ref={Modal => {
          modalRef = Modal;
        }}
        id={id}
        className={'modal ' + mainClass}
      >
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <p className="modal-close waves-effect waves-red btn-flat">
            Disagree
            </p>
          <p className="modal-close waves-effect waves-green btn-flat">
            Agree
            </p>
        </div>
      </div>
    </div>
  );
}

export default Modal
