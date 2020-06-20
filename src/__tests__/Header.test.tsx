import React from 'react'
// import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import Header from 'components/layout/Header/Header';
import { createMemoryHistory } from 'history'
import AuthContext from 'context/auth/authContext';

const renderHeader = (props = {}, isAuth = false) => {
  const history = createMemoryHistory();
  return render(
    <AuthContext.Provider value={{ isAuth }}>
      <Router history={history}>
        <Header {...props} />
      </Router>
    </AuthContext.Provider>
  );
};

describe('Header Component', () => {
  afterEach(cleanup);
  // expect.extend({ toBeInTheDocument });

  it('should take a snapshot', () => {
    const { asFragment } = renderHeader();
    expect(asFragment()).toMatchSnapshot()
  });

  it('should toggle theme', () => {
    const { getByTestId } = renderHeader(),
      { textContent } = getByTestId('dark-mode'),
      btn = getByTestId('dark-mode-btn');

    fireEvent.click(btn);
    const { textContent: newText } = getByTestId('dark-mode');

    expect(newText).toBeTruthy();
    expect(newText).not.toBe(textContent);
  });

  it('should toggle theme 2 number of times', () => {
    const { getByTestId } = renderHeader(),
      btn = getByTestId('dark-mode-btn');
    btn.onclick = jest.fn();

    fireEvent.click(btn);
    fireEvent.click(btn);
    expect(btn.onclick).toHaveBeenCalledTimes(2);
  });

  it('should show login link if user is logged out', () => {
    const { getByTestId } = renderHeader(),
      loginLink = getByTestId('login'),
      logOutLink = screen.queryByTestId('logout');
    expect(loginLink).toBeInTheDocument();
    expect(logOutLink).not.toBeInTheDocument();
  });

  it('should show logout link if user is logged in', () => {
    const { getByTestId } = renderHeader({}, true),
      loginLink = screen.queryByTestId('login'),
      logOutLink = getByTestId('logout');
    expect(logOutLink).toBeInTheDocument();
    expect(loginLink).not.toBeInTheDocument();
  });

});