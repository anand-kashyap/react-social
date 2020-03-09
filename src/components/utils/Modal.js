import React, { useEffect, useRef } from 'react';
import { M } from './Shared';
import './Modal.scss';
const Modal = ({ bottom = false, dismiss = true, options = null, id = 'modal1' }) => {
  let modalRef = useRef();
  const mainClass = bottom ? 'bottom-sheet' : null;
  if (!options) {
    options = {
      inDuration: 250,
      outDuration: 350,
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
    <div
      ref={Modal => {
        modalRef = Modal;
      }}
      id={id}
      className={'modal ' + mainClass}
    >
      <div className="modal-content">
        <h5>Create Post</h5>
        <textarea placeholder="Share something..."></textarea>
      </div>
      <div className="modal-footer">
        <p className="modal-close waves-effect waves-red btn-flat">
          Cancel
        </p>
        <p className="waves-effect waves-light btn red">
          Create
        </p>
      </div>
    </div>
  );
}

export default Modal
