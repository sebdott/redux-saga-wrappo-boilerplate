import React, {Component} from 'react';

class ErrorContainer extends Component {
  render() {
    const {children} = this.props;
    return (
      <div>
        <div>This is the error container </div>
        <div>{children}</div>
      </div>
    );
  }
}

export default ErrorContainer;
