import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {pageSaga} from 'actions/saga/';
import {connect} from 'redux-saga-wrappo';
import getClientItem from 'utils/getClientItem';

class Landing extends PureComponent {
  componentDidMount() {
    this.props.pageSaga.callGitRepo();
  }
  render() {
    const {DefaultLayout} = this.props.layouts;
    const {isLogon, username} = this.props.userModel;

    if (isLogon) {
      return (
        <DefaultLayout>
          <div>
            <h1>Welcome {username} !!</h1>
          </div>
        </DefaultLayout>
      );
    }

    return (
      <DefaultLayout>
        <div>
          <h1>Home</h1>
        </div>
      </DefaultLayout>
    );
  }
}

const connectConfig = {
  mapActionToProps: {pageSaga},
  mapStateToProps: ({userModel}) => ({
    userModel,
  }),
};

export default getClientItem(['layouts'])(connect(connectConfig)(Landing));
