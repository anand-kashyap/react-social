import React from 'react'
import { render, cleanup } from '@testing-library/react'
import PostModal from 'utils/modals/post/Modal';

const renderPModal = (opened = false, closed = () => { }) => {
  return render(
    <PostModal opened={opened} closed={closed} />
  );
};

describe('Post Modal Component', () => {
  afterEach(cleanup);

  it('should take a snapshot', () => {
    const { asFragment } = renderPModal();
    expect(asFragment()).toMatchSnapshot()
  });

  it('should autofocus textarea on each render', () => {
    const { getByTestId, rerender } = renderPModal(),
      txtArea = getByTestId('textarea');
    expect(txtArea).not.toHaveFocus();
    rerender(<PostModal opened={true} closed={() => { }} />);
    expect(txtArea).toHaveFocus();
  });

});