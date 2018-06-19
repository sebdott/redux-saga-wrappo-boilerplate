import React, {Component} from 'react';
import css from './styles.less';
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      message: '',
    };
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true, message: info.componentStack});
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className={css.container}>
          <h3 className={css.headline}>A BIG FAT ERROR ¯\_(ツ)_/¯</h3>
          <p className={css.code}>{this.state.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
