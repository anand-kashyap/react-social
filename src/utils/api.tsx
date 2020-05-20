import axios from 'axios';
import { verify } from 'jsonwebtoken';
import { history } from 'components/App';

const salt = process.env.REACT_APP_SALT,
  ls = localStorage;

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://jsclub.dev/api' : 'http://localhost:2000/api';

// * adding interceptors
//* for adding token
axios.interceptors.request.use(
  req => {
    console.log('from interce: ', req);
    const token = ls.getItem('snappyToken');
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
    const { data: { token } } = res;
    if (token) { // if login
      // console.log('from api', salt);
      const payload = verify(token, salt as string);
      ls.setItem('snappyToken', token);
      ls.setItem('snappyUser', JSON.stringify(payload));
    }

    return res;
  },
  e => {
    const { status, data, } = e.response;
    if (status === 401 && ls.getItem('snappyToken')) {
      console.log('cleared user');
      ls.removeItem('snappyToken');
      ls.removeItem('snappyUser');
      history.location.pathname !== '/login' && history.push('/login');
    }

    console.error('in err', data);

    return Promise.reject(e);
  }
)

export default axios;