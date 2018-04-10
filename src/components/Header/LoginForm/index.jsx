import React from 'react';
import { Field, Form } from 'redux-form';
import { connect } from 'redux-saga-wrappo';
import { Input } from '../../common/';
import styles from './styles';

const renderField = ({
  input,
  label,
  meta: { error, touched },
  type,
  className,
}) => {
  const inputProps = {
    ...input,
    tip: { message: touched ? error : '', type: 'error' },
    placeholder: label,
    type,
    className,
  };
  return <Input {...inputProps} />;
};
const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Invalid Username';
  }
  if (!values.password) {
    errors.password = 'Invalid Password';
  }
  return errors;
};

const showResults = values => {
  console.dir(values);
};

const LoginForm = props => {
  const { classes, handleSubmit, submitting } = props;
  return (
    <Form className={classes.form} onSubmit={handleSubmit(showResults)}>
      <Field
        className={classes.input}
        label="Username"
        name="username"
        component={renderField}
      />
      <Field
        className={classes.input}
        label="Password"
        name="password"
        component={renderField}
        type="password"
      />
      <button type="submit" className={classes.btn} disabled={submitting}>
        Login
      </button>
      <button className={classes.btn}>Register</button>
    </Form>
  );
};

export default connect({
  styles,
  mapFormToProps: {
    form: 'loginForm',
    destroyOnUnmount: false,
    validate,
  },
})(LoginForm);
