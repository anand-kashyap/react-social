import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { string, object } from 'yup';

import './ForgotPass.scss';
import { Link } from 'react-router-dom';

const ForgotPass = () => {
  const validateFields = () =>
    object().shape({
      email: string().required().email(),
    });
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  return (
    <div>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validateFields}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='forgot-form'>
            <div className='input-field'>
              <Field type='email' id='femail' name='email' />
              <label htmlFor='femail'>Email</label>
              <ErrorMessage name='email' component='div' className='err' />
            </div>
            <button
              type='submit'
              className='btn waves-effect waves-light custom-btn'
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <div className='signup'>
        <span>Back to Login </span>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default ForgotPass;
