import React, { useContext, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Loader, Icon } from 'semantic-ui-react';

// import { AuthContext } from "../utils/context/Auth/AuthState";
// import {
//   validateEmail,
//   validatePassword,
//   validateUsername,
//   validateConfirmPassword,
//   validategovName,
// } from "../utils/validateAuth";

import styles from '../stylesheets/app.module.scss';

export default function Register() {
  // const { isLoading, register } = useContext(AuthContext);
  const [canSeePassword, setCanSeePassword] = useState(false);
  const [canSeeConfirmPassword, setcanSeeConfirmPassword] = useState(false);

  return (
    <div className={styles.wrapper}>
      <h1>Register</h1>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          inGameName: '',
        }}
        onSubmit={(values, actions) => {
          // register(values);
          actions.resetForm();
        }}
      >
        {({ errors, touched, validateForm, values }) => (
          <Form className={styles.form}>
            {errors.username && touched.username && (
              <div className={styles.validate}>{errors.username}</div>
            )}
            <label>Username </label>
            <Field type="text" name="username" />
            {errors.inGameName && touched.inGameName && (
              <div className={styles.validate}>{errors.inGameName}</div>
            )}
            <label>Govenor Name</label>
            <Field type="text" name="inGameName" />
            {errors.email && touched.email && <div className={styles.validate}>{errors.email}</div>}
            <label>Email </label>
            <Field type="text" name="email" />
            {errors.password && touched.password && (
              <div className={styles.validate}>{errors.password}</div>
            )}
            <label>Password </label>
            <div className={styles.password}>
              <Field type={canSeePassword ? 'text' : 'password'} name="password" />
              <Icon
                size="big"
                className={styles.icon}
                name={canSeePassword ? 'eye slash' : 'eye'}
                onClick={() => setCanSeePassword(!canSeePassword)}
              />
            </div>
            {errors.confirmPassword && touched.confirmPassword && (
              <div className={styles.validate}>{errors.confirmPassword}</div>
            )}
            <label>Confirm Password </label>
            <div className={styles.password}>
              <Field
                type={canSeeConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                // validate={(value) => validateConfirmPassword(values.password, value)}
              />
              <Icon
                size="big"
                className={styles.icon}
                name={canSeeConfirmPassword ? 'eye slash' : 'eye'}
                onClick={() => setcanSeeConfirmPassword(!canSeeConfirmPassword)}
              />
            </div>
            <button type="submit" onClick={() => validateForm()}>
              {/* {!isLoading ? 'Register' : <Loader />} */}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
