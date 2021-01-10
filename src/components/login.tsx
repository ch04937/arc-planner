import React, { useContext, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Loader, Icon } from 'semantic-ui-react';

// import { AuthContext } from "../utils/context/Auth/AuthState";
// import { validateUsername, validatePassword } from "../utils/validateAuth";

import styles from '../stylesheets/app.module.scss';

export default function LogIn() {
  // const { isLoading, signIn, signInError } = useContext(AuthContext);
  const [canSeePassword, setCanSeePassword] = useState(false);

  return (
    <div className={styles.wrapper}>
      <h1>Login</h1>
      {/* {signInError ? <p className={styles.validate}>{signInError}</p> : ""} */}
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values, actions) => {
          // signIn(values);
          actions.resetForm();
        }}
      >
        {({ errors, touched, validateForm }) => (
          <Form className={styles.form}>
            {errors.username && touched.username && (
              <div className={styles.validate}>{errors.username}</div>
            )}
            <label>Username </label>
            <Field type="text" name="username" />
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
            <button type="submit" onClick={() => validateForm()}>
              {/* {!isLoading ? "Sign In" : <Loader />} */}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
