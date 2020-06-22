import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Dropdown, { dopt } from 'utils/dropdown/DropDown';

const renderDropdown = (dropOpts: dopt[], selOpt: any = () => { }, id = 'test1') => {
  return render(
    <Dropdown id={id} dropOpts={dropOpts} selOpt={selOpt} />
  );
};

function addOffsetParent(dBtn: HTMLElement) {
  Object.defineProperty(dBtn, 'offsetParent', {
    writable: true,
    value: {
      getBoundingClientRect() {
        return {
          x: 851.671875,
          y: 200.046875,
          width: 8.34375,
          height: 17,
          top: 967.046875,
          right: 860.015625,
          toJSON() { },
          bottom: 984.046875,
          left: 851.671875,
        };
      }
    },
  });
}
describe('Dropdown Component', () => {
  afterEach(cleanup);
  const defOps: dopt[] = [
    { val: 'one', icon: 'all_out' },
    { val: 'delete', icon: 'delete' }
  ];

  it('should take a snapshot', () => {
    const { asFragment } = renderDropdown(defOps);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should toggle container on button click', () => {
    const { getByTestId } = renderDropdown(defOps),
      dBtn = getByTestId('drop-btn'),
      dCtn = getByTestId('drop-contain');
    addOffsetParent(dBtn);
    expect(dCtn.style.display).toBeFalsy();
    fireEvent.click(dBtn);
    expect(dCtn.style.display).toBeTruthy();
  });

  it('should return correct value on dropdown opt click', () => {
    const mockFn = jest.fn(v => v),
      { getByTestId } = renderDropdown(defOps, mockFn),
      dBtn = getByTestId('drop-btn'),
      dCtn = getByTestId('drop-contain'),
      dOBtn = getByTestId(defOps[0].val);
    addOffsetParent(dBtn);
    fireEvent.click(dBtn);
    expect(dCtn.style.display).toBeTruthy();
    fireEvent.click(dOBtn);
    expect(mockFn).toHaveReturnedWith(defOps[0].val);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

});

