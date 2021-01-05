import { gql, useMutation } from '@apollo/client';
import authContext from 'context/auth/authContext';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { verify } from 'jsonwebtoken';
import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Spinner from 'utils/Spinner';
import { object, string } from 'yup';
import './Login.scss';

const salt = process.env.REACT_APP_SALT,
  ls = localStorage;
const Login = () => {
  const history = useHistory(),
    { setToken } = useContext(authContext),
    [loading, setLoading] = useState(false),
    AUTH = gql`
      mutation ($email: String!, $password: String!) {
          authenticate(email: $email, password: $password)
      }
    `;
  const [auth] = useMutation(AUTH);

  const validateFields = () =>
    object().shape({
      email: string().required().email(),
      password: string().required().min(4),
    });

  const onSubmit = (values, { setSubmitting }) => {
    console.log('onSubmit -> values', values)
    setLoading(true);
    auth({ variables: values }).then(({ data: { authenticate: token } }) => {
      if (!token) {
        return;
      }
      const payload = verify(token, salt as string);
      setToken(token);
      ls.setItem('snappyUser', JSON.stringify(payload));
      history.push('/');
    }).finally(() => {
      setSubmitting(false);
      setLoading(false);
    });
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
