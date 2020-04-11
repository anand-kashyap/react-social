import { GET_COMMENTS } from './types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COMMENTS:
      console.log('payload', payload);
      return [...payload.comments];
    default:
      return state;
  }
}