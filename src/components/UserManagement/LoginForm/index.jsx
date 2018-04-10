import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import { Field, Form, reduxForm } from 'redux-form';
import styles from './styles';

class LoginForm extends PureComponent {
  Input = ({ meta, input, label, value, ...otherProps }) => (
    <input {...input} placeholder={label} {...otherProps} value={value} />
  );

  render() {
    const { classes } = this.props;

    return (
      <Form className={classes.form} onSubmit={data => console.log(data)}>
        <div>
          <Field
            className={classes.input}
            label="用户名"
            name="username"
            component={this.Input}
          />
        </div>
        <div>
          <Field
            className={classes.input}
            label="密码"
            name="password"
            component={this.Input}
            type="password"
          />
        </div>
        <div className={classes.btnRow}>
          <button className={classes.btn}>登入</button>
          <button className={classes.btn}>注册</button>
        </div>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'login',
  destroyOnUnmount: false,
})(injectSheet(styles)(LoginForm));
