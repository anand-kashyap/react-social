import React, { Fragment, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { M } from '../Shared';
const DropDown = ({ id, dropOpts, selOpt }) => {
  let dropbRef: any = useRef();
  useEffect(() => {
    M.Dropdown.init(dropbRef, {
      alignment: 'right',
      autoTrigger: false,
      coverTrigger: false,
    });
  }, []);

  return (
    <Fragment>
      <button
        ref={(bref) => (dropbRef = bref)}
        className='dropdown-trigger btn-flat more-details'
        data-target={'dropdown' + id}
      >
        <i className='material-icons-outlined'>more_horiz</i>
      </button>
      <ul id={'dropdown' + id} className='dropdown-content'>
        {dropOpts.map(({ val, icon }) => (
          <li key={val}>
            <button onClick={() => selOpt(val)} className='drop-item'>
              <i className='material-icons-outlined'>{icon}</i>{' '}
              <span>{val}</span>
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
DropDown.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  dropOpts: PropTypes.array.isRequired,
  selOpt: PropTypes.func.isRequired,
};
export default DropDown;
