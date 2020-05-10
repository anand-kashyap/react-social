import axios from 'axios';
import { verify } from 'jsonwebtoken';

const { setItem, getItem, removeItem } = localStorage;
const salt = '$2b$10$HwNikNajaE.2Hwf47wJ1i.';

// * adding interceptors
//* for adding token
axios.interceptors.request.use(
  req => {
    console.log('from interce: ', req);
    const token = getItem('snappyToken');
    if (token) {
      // add auth token
      req.headers.Authorization = token;
    }
    return req;
  }
)

//! error handler
axios.interceptors.response.use(
  (res) => {
    const { data: { token }, status } = res;
    if (token) { // if login
      console.log('from api', token);
      const payload = verify(token, salt);
      setItem('snappyToken', token);
      setItem('snappyUser', JSON.stringify(payload));
    }

    if (status === 401 && getItem('snappyToken')) {
      removeItem('snappyToken');
      removeItem('snappyUser');
    }
    return res;
  },
  e => {
    console.error(e.response.data.msg);

    return Promise.reject(e);
  }
)

export default axios;