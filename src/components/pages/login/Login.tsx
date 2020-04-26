import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './Login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  const validateFields = (values) => {
    const errors: any = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 4) {
      errors.password = 'Password length is too short';
    }
    return errors;
  };
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={validateFields}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='login-form'>
            <div className='input-field'>
              <Field type='email' id='email' name='email' />
              <label htmlFor='email'>Email</label>
              <ErrorMessage name='email' component='div' className='err' />
            </div>
            <div className='input-field'>
              <Field type='password' id='pass' name='password' />
              <label htmlFor='pass'>Password</label>
              <ErrorMessage name='password' component='div' className='err' />
            </div>
            <button
              type='submit'
              className='btn waves-effect waves-light custom-btn'
              disabled={isSubmitting}
            >
              Login
            </button>
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
    </div>
  );
};

export default Login;
