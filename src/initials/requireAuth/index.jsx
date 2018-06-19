import React, {Component} from 'react';
import {connect} from 'redux-saga-wrappo';
import {AccessDenied} from 'containers/Error/';

export default RenderComponent => {
  class RequireAuth extends Component {
    render() {
      if (!this.props.isLogon) {
        return <AccessDenied />;
      }
      return <RenderComponent {...this.props} />;
    }
  }
  const connectConfig = {
    mapStateToProps: ({userModel}) => {
      return {
        userData: userModel.userData,
      };
    },
  };
  return connect(connectConfig)(RequireAuth);
};
