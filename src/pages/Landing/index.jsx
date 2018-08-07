import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {pageSaga} from 'actions/saga/';
import {connect} from 'rs-wrappo';

class Landing extends PureComponent {
  componentDidMount() {
    this.props.pageSaga.callGitRepo();
  }
  render() {
    const {isLogon, username} = this.props.userModel;

    if (isLogon) {
      return (
        <div>
          <h1>Welcome {username} !!</h1>
        </div>
      );
    }

    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

const connectConfig = {
  mapActionToProps: {pageSaga},
  mapStateToProps: ({userModel}) => ({
    userModel,
  }),
};

export default connect(connectConfig)(Landing);
