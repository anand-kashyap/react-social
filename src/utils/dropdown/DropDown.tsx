import React, { Fragment, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { M } from '../Shared';

export type dopt = {
  val: string,
  icon: string
};

type DropProps = {
  id: number | string,
  dropOpts: dopt[],
  selOpt: any
};

const DropDown = ({ id, dropOpts, selOpt }: DropProps) => {
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
        data-testid='drop-btn'
        ref={(bref) => (dropbRef = bref)}
        className='dropdown-trigger btn-flat more-details'
        data-target={'dropdown' + id}
      >
        <i className='material-icons-outlined'>more_horiz</i>
      </button>
      <ul
        data-testid='drop-contain'
        id={'dropdown' + id} className='dropdown-content'>
        {dropOpts.map(({ val, icon }) => (
          <li key={val}>
            <button data-testid={val} onClick={() => selOpt(val)} className='drop-item'>
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
