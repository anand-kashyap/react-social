import { ADD_POST, NEW_POSTS, DELETE_POST } from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case NEW_POSTS:
      return [...payload];
    case ADD_POST:
      return [...state, payload];
    case DELETE_POST:
      return [...state].filter(({ id }) => id !== payload.id);
    default:
      return state;
  }
}