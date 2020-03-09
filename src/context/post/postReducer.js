import { ADD_POST } from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_POST:
      console.log([payload, ...state])
      return [payload, ...state];
    default:
      return state;
  }
}