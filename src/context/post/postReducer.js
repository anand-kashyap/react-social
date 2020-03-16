import { ADD_POST, NEW_POSTS } from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case NEW_POSTS:
      return [...payload];
    case ADD_POST:
      return [...state, payload];
    default:
      return state;
  }
}