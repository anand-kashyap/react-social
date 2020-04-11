import React, { useReducer } from 'react'

import Context from './context';
import Reducer from './reducer';

import { comments } from 'mockData/posts';
import { GET_COMMENTS } from './types';
const CommentState = props => {
  const initialState = []; // will be replaced by api call
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getCommentsByPostId = (postId) => {
    //todo api call
    dispatch({ payload: comments.find(v => v.postId === parseInt(postId)), type: GET_COMMENTS })
  };

  return <Context.Provider value={{ comments: state, getCommentsByPostId }}>
    {props.children}
  </Context.Provider>
}

export default CommentState
