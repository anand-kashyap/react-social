import { GET_TOKEN, SET_TOKEN, DEL_TOKEN } from '../types';

export default (state, action: { type: number, payload?: string }) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TOKEN:
      return localStorage.getItem('snappyToken');
    case SET_TOKEN:
      return (localStorage.setItem('snappyToken', payload as string), payload);
    case DEL_TOKEN:
      return localStorage.removeItem('snappyToken');
    default:
      return state;
  }
}