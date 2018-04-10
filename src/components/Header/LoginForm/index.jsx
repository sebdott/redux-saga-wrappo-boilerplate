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
    errors.username = '他妈的这是必填';
  }
  if (!values.password) {
    errors.password = '他妈的这是必填!';
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
        label="用户名"
        name="username"
        component={renderField}
      />
      <Field
        className={classes.input}
        label="密码"
        name="password"
        component={renderField}
        type="password"
      />
      <button type="submit" className={classes.btn} disabled={submitting}>
        登入
      </button>
      <button className={classes.btn}>注册</button>
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
