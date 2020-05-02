import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { string, object, ref } from 'yup';

import './Register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
  const validateFields = () => {
    return object().shape({
      email: string().required().email(),
      password: string().required().min(4),
      name: string().required().min(3),
      confirmPassword: string()
        .required()
        .test('equal', 'Passwords do not match!', function (v) {
          const orpass = ref('password');
          return v === this.resolve(orpass);
        }),
    });
  };

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  return (
    <Formik
      initialValues={{ email: '', password: '', name: '', confirmPassword: '' }}
      validationSchema={validateFields}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className='register-form'>
          <div className='input-field'>
            <Field type='text' id='name' name='name' />
            <label htmlFor='name'>Name</label>
            <ErrorMessage name='name' component='div' className='err' />
          </div>
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
          <div className='input-field'>
            <Field type='password' id='confirm-pass' name='confirmPassword' />
            <label htmlFor='confirm-pass'>Confirm Password</label>
            <ErrorMessage
              name='confirmPassword'
              component='div'
              className='err'
            />
          </div>
          <button
            type='submit'
            className='btn waves-effect waves-light custom-btn'
            disabled={isSubmitting}
          >
            Register
          </button>
          <div className='back-login'>
            <span>Already a User? </span>
            <Link to='/login'>Login</Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Register;