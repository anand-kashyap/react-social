import axios from 'axios';

// * adding interceptors
//* for adding token
axios.interceptors.request.use(
  req => {
    console.log('from interce: ', req);
    // add auth token
    req.headers.token = 123;
    return req;
  }
)

//! error handler
axios.interceptors.response.use(
  res => res,
  e => {
    console.error(e.response.data.msg);

    return Promise.reject(e);
  }
)

export default axios;