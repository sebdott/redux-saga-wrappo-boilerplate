import React, {Component} from 'react';
import {Form, Icon, Input, Button, Row} from 'antd';
import {connect} from 'redux-saga-wrappo';
import {pageSaga} from 'actions/saga/';
import css from './styles';
const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Login extends Component {
  componentDidMount() {
    this.props.form.validateFields();
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, forms) => {
      if (!err) {
        const {username, password} = forms;
        this.props.userModel.updateState({username, password});
        this.props.pageSaga.putUserLogin();
      }

      //
    });
  };
  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form;
    // Only show error after a field is touched.
    const usernameError =
      isFieldTouched('username') && getFieldError('username');
    const passwordError =
      isFieldTouched('password') && getFieldError('password');
    return (
      <Row className={css.form}>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem
            validateStatus={usernameError ? 'error' : ''}
            help={usernameError || ''}>
            {getFieldDecorator('username', {
              rules: [{required: true, message: 'Please input your username!'}],
            })(
              <Input
                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
                placeholder="Username"
              />,
            )}
          </FormItem>
          <FormItem
            validateStatus={passwordError ? 'error' : ''}
            help={passwordError || ''}>
            {getFieldDecorator('password', {
              rules: [{required: true, message: 'Please input your Password!'}],
            })(
              <Input
                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              disabled={hasErrors(getFieldsError())}
              loading={this.props.userModel.isLoading}>
              Login
            </Button>
          </FormItem>
        </Form>
      </Row>
    );
  }
}
const connectConfig = {
  mapActionToProps: {pageSaga},
  mapStateToProps: ({userModel, form, pageModel}) => {
    const loginForm = form.LoginForm;
    return {
      userModel,
      loginForm,
      pageModel,
    };
  },
};
export default Form.create(connectConfig)(connect(connectConfig)(Login));
