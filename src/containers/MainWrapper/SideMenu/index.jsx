import React, {Component} from 'react';
import {map} from 'lodash';
import {Link} from 'react-router-dom';
import {connect} from 'redux-saga-wrappo';
import {SiteMap} from 'constants';
import {Layout, Menu} from 'antd';
import getClientItem from 'utils/getClientItem';

import sharedCss from '../styles.less';
import css from './styles.less';

const {Sider} = Layout;

/**
 * @todo:
 * - extract sider width out from less var
 */

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: !props.siderIsVisible,
    };
  }
  static defaultProps = SiteMap.Main;

  componentWillReceiveProps = nextProps => {
    this.setState({
      collapsed: !nextProps.siderIsVisible,
    });
  };
  getCurrentPath = () => {
    const {match} = this.props;
    return match.url;
  };
  onLogOut = () => {
    // const {authenticationSaga} = this.props;
    // authenticationSaga.getUserLogout();
  };
  renderLinks() {
    const {urls} = this.props;
    const menuList = [];
    map(urls, (url, path) => {
      if (url.sub) {
        menuList.push(this.renderSubMenu(url.placeholder, url.sub));
      } else {
        menuList.push(
          <Menu.Item key={path}>
            <Link to={path}>{url.placeholder}</Link>
          </Menu.Item>,
        );
      }
    });

    return menuList;
  }
  renderSubMenu(placeholder, routes) {
    const menuList = [];

    map(routes, (url, path) => {
      if (url.sub) {
        menuList.push(this.renderSubMenu(url.placeholder, url.sub));
      } else {
        menuList.push(
          <Menu.Item key={path}>
            <Link to={path}>{url.placeholder}</Link>
          </Menu.Item>,
        );
      }
    });
    return (
      <Menu.SubMenu key={placeholder} title={placeholder}>
        {menuList}
      </Menu.SubMenu>
    );
  }
  render() {
    const {assets} = this.props;
    const {currentPath} = this.state;
    const siderProps = {
      theme: 'dark',
      className: css.sider,
      collapsed: this.state.collapsed,
      collapsedWidth: 0,
      collapsible: true,
    };
    const menuProps = {
      theme: 'dark',
      defaultSelectedKeys: [currentPath],
      selectedKeys: [currentPath],
      mode: 'inline',
    };
    const {logo} = assets;
    return (
      <Sider {...siderProps} trigger={null}>
        <Link to="/" className={sharedCss.logoAnchor}>
          <img src={logo} alt="logo" />
        </Link>
        <Menu {...menuProps}>{this.renderLinks()}</Menu>
      </Sider>
    );
  }
}

const connectConfig = {
  mapStateToProps: ({userModel, router}) => {
    return {
      userData: userModel,
      pathname: router.location.pathname,
    };
  },
};

export default getClientItem(['assets'])(connect(connectConfig)(SideMenu));
