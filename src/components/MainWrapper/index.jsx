// @flow
import React, { PureComponent, type Node } from 'react';
import injectSheet from 'react-jss';
import { throttle } from 'lodash';

import Header from '../Header/';
import Menu from '../SideMenu/';
import styles from './styles';

type PropType = {
  children: Node,
  classes: Object,
  className: string,
  pathname: string,
};

type StateType = {
  shouldMenuVisible: boolean,
};

class MainWrapper extends PureComponent<PropType, StateType> {
  constructor() {
    super();
    this.state = {
      shouldMenuVisible: false,
    };
    this.hideMenu = throttle(this.hideMenu, 1000);
    this.handleMenuToggle = throttle(this.handleMenuToggle, 1000);
  }
  componentWillReceiveProps = (nextProps: PropType) => {
    if (this.props.pathname !== nextProps.pathname) {
      this.setState({
        shouldMenuVisible: false,
      });
    }
  };
  hideMenu = () => {
    this.setState({
      shouldMenuVisible: false,
    });
  };
  handleMenuToggle = () => {
    this.setState({ shouldMenuVisible: !this.state.shouldMenuVisible });
  };
  render() {
    const { children, classes } = this.props;
    const { shouldMenuVisible } = this.state;
    const menuProps = {
      shouldMenuVisible,
      isMenuVisible: (shouldMenuVisible: boolean) => {
        this.setState({ shouldMenuVisible });
      },
    };
    return (
      <div className={classes.container}>
        <Menu {...menuProps} />
        <div className={classes.content}>
          <Header onMenuToggle={this.handleMenuToggle} />
          {children}
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(MainWrapper);
