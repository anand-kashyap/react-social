import React from 'react'
import { Redirect } from 'react-router-dom';

const withAuth = (Component) => {
  const AuthRoute = () => {
    const isAuth = !!localStorage.getItem('snappyToken');
    if (isAuth) {
      return <Component />;
    }
    return <Redirect to='/login' />;
  };

  return AuthRoute;
};

export default withAuth;