// @flow
import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { getClientItem } from '../../utils';
// import invariant from "invariant";
import styles from './styles';
import LoginForm from './LoginForm/';
import { Icon } from '../common/';
import Sticky from './Sticky';

type AssetsType = {
  logo: Object,
};

type PropType = {
  classes: Object,
  assets: AssetsType,
  onMenuToggle?: Function,
};

class Header extends PureComponent<PropType> {
  render() {
    const { classes, assets } = this.props;
    const { logo } = assets;
    return (
      <Sticky>
        <header className={classes.container}>
          <div className={classes.logoColumn}>
            <button
              onClick={this.props.onMenuToggle}
              className={classes.menuIcon}>
              <Icon name="bars" prefix="fas" />
            </button>
            <Link to="/">
              <img src={logo} alt="logo" className={classes.logo} />
            </Link>
          </div>
          <div className={classes.formColumn}>
            <LoginForm />
          </div>
        </header>
      </Sticky>
    );
  }
}
export default getClientItem(['assets'])(injectSheet(styles)(Header));
