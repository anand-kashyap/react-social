import React, { useReducer } from 'react'

import AuthContext from './authContext';
import AuthReducer from './authReducer';

import { GET_TOKEN, SET_TOKEN, DEL_TOKEN } from '../types';
const AuthState = props => {

  const [state, dispatch] = useReducer(AuthReducer, localStorage.getItem('snappyToken'));

  const getToken = () => {
    dispatch({ type: GET_TOKEN });
  };

  const deleteToken = () => {
    dispatch({ type: DEL_TOKEN })
  }

  const setToken = (token: string) => {
    dispatch({ type: SET_TOKEN, payload: token })
  }

  return <AuthContext.Provider value={{ auth: state, isAuth: !!state, getToken, deleteToken, setToken }}>
    {props.children}
  </AuthContext.Provider>
}

export default AuthState
