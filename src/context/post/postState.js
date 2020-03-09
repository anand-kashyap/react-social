import React, { useReducer } from 'react'

import PostContext from './postContext';
import PostReducer from './postReducer';
import posts from '../../mockData/posts';

import { ADD_POST } from '../types';
const PostState = props => {
  const initialState = posts;

  let [state, dispatch] = useReducer(PostReducer, initialState);

  const addNew = (text, createdBy) => {
    // setLoading();
    const id = state[state.length - 1].id + 1;
    const d = new Date();
    const createdAt = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
    dispatch({ payload: { text, createdBy, id, createdAt }, type: ADD_POST });
  };

  return <PostContext.Provider value={{ posts: state, addNew }}>
    {props.children}
  </PostContext.Provider>
}

export default PostState
