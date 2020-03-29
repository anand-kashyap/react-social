import React, { useReducer } from 'react'

import PostContext from './postContext';
import PostReducer from './postReducer';
import posts from '../../mockData/posts';

import { ADD_POST, NEW_POSTS, DELETE_POST } from '../types';
const PostState = props => {
  const initialState = []; // will be replaced by api call

  const [state, dispatch] = useReducer(PostReducer, initialState);

  const fetchNewPosts = () => {
    // todo: make api call
    console.log('newposts');
    dispatch({ payload: posts, type: NEW_POSTS });
  };

  const addNew = (text, createdBy) => {
    const d = new Date();
    const id = state.length > 0 ? state[state.length - 1].id + 1 : 1;
    const createdAt = new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }).format(d);
    dispatch({ payload: { id, text, createdBy, createdAt }, type: ADD_POST });
  };

  const deletePost = (post) => {
    // todo add api call to delete
    dispatch({ payload: post, type: DELETE_POST })
  }

  return <PostContext.Provider value={{ posts: state, addNew, fetchNewPosts, deletePost }}>
    {props.children}
  </PostContext.Provider>
}

export default PostState
