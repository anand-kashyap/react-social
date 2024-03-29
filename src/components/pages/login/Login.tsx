import React, { useEffect, useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { string, object } from 'yup';
import { verify } from 'jsonwebtoken';
import authContext from 'context/auth/authContext';

import './Login.scss';
import { Link, useHistory } from 'react-router-dom';
import axios from 'utils/api';
import Spinner from 'utils/Spinner';
const salt = process.env.REACT_APP_SALT,
  ls = localStorage;
const Login = () => {
  const history = useHistory();
  const { setToken } = useContext(authContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(process.env.NODE_ENV);
  }, []);
  const validateFields = () =>
    object().shape({
      email: string().required().email(),
      password: string().required().min(4),
    });
  const onSubmit = (values, { setSubmitting }) => {
    setLoading(true);
    axios
      .post('/user/login', values)
      .then(
        (res) => {
          console.log('from login');
          const { data: { token } } = res;
          if (token) { // if login
            // console.log('from api', salt);
            const payload = verify(token, salt as string);
            setToken(token);
            ls.setItem('snappyUser', JSON.stringify(payload));
          }
          history.push('/');
        }
      )
      .catch((e) => {
        console.error(e);
      }).finally(
        () => {
          setSubmitting(false);
          setLoading(false);
        }
      );

  };
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validateFields}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='login-form'>
            <div className='input-field'>
              <Field type='email' name='email' />
              <label>Email</label>
              <ErrorMessage name='email' component='div' className='err' />
            </div>
            <div className='input-field'>
              <Field type='password' name='password' />
              <label>Password</label>
              <ErrorMessage name='password' component='div' className='err' />
            </div>
            <Spinner active={loading} />
            {!loading && <button
              type='submit'
              className='btn waves-effect waves-light custom-btn'
              disabled={isSubmitting}
            >
              Login
            </button>}
            <Link
              className='btn-flat waves-effect waves-light'
              to='/forgot-password'
            >
              Forgot Password?
            </Link>
          </Form>
        )}
      </Formik>
      <div className='signup'>
        <span>New user? </span>
        <Link to='/register'>Sign up</Link>
      </div>
    </>
  );
};

export default Login;
