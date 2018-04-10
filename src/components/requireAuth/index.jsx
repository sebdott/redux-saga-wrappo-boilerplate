import React, { PureComponent } from 'react';
import { connect } from 'redux-saga-wrappo';
import { AccessDenied } from '../Error/';

export default RenderComponent => {
  class RequireAuth extends PureComponent {
    render() {
      if (!this.props.user) {
        return <AccessDenied />;
      }
      return <RenderComponent {...this.props} />;
    }
  }
  return connect()(RequireAuth);
};
