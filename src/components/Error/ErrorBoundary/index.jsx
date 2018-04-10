// @flow
import React, { PureComponent, type Node } from 'react';
import injectSheet from 'react-jss';

import styles from './styles';

type PropType = {
  children: Node,
  classes: Object,
};

type StateType = {
  hasError: boolean,
  message: string,
};
class ErrorBoundary extends PureComponent<PropType, StateType> {
  constructor() {
    super();
    this.state = {
      hasError: false,
      message: '',
    };
  }

  componentDidCatch(error: Object, info: Object) {
    this.setState({ hasError: true, message: info.componentStack });
  }
  render() {
    const { classes } = this.props;
    if (this.state.hasError) {
      return (
        <div className={classes.container}>
          <h3 className={classes.headline}>A BIG FAT ERROR ¯\_(ツ)_/¯</h3>
          <p className={classes.code}>{this.state.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default injectSheet(styles)(ErrorBoundary);
