import axios from 'axios';
import { history } from 'components/App';

const ls = localStorage;

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://snappy-gql.netlify.app/.netlify/functions/graphql' : 'http://localhost:2000/api';

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
