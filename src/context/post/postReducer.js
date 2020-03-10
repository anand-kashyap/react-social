import { ADD_POST } from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_POST:
      return [...state, payload];
    default:
      return state;
  }
}