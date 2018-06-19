import React, {Component} from 'react';
import {Layout, Row} from 'antd';
import {throttle} from 'lodash';
import key from 'keymaster';
import Header from './Header';
import SideMenu from './SideMenu/';
import css from './styles.less';

const {Content} = Layout;

class MainWrapper extends Component {
  constructor() {
    super();
    this.state = {
      siderIsVisible: true,
    };
    this.hideMenu = throttle(this.hideMenu, 1000);
    this.handleMenuToggle = throttle(this.handleMenuToggle, 1000);
  }

  componentDidMount() {
    key('esc', () => this.hideMenu());
  }
  // componentWillReceiveProps = (nextProps: PropType) => {
  //   if (this.props.pathname !== nextProps.pathname) {
  //     this.hideMenu();
  //   }
  // };
  hideMenu = () => {
    this.setState({
      siderIsVisible: false,
    });
  };
  handleMenuToggle = () => {
    this.setState({siderIsVisible: !this.state.siderIsVisible});
  };
  render() {
    const {children, routes, match} = this.props;
    const {siderIsVisible} = this.state;
    const menuProps = {
      match,
      routes,
      siderIsVisible,
    };
    const headerProps = {
      siderIsVisible,
      className: css.header,
      onMenuToggle: this.handleMenuToggle,
    };
    return (
      <Layout hasSider className={css.containerLayout}>
        <SideMenu {...menuProps} />
        <Layout className={css.layout}>
          <Header {...headerProps} />
          <Content className={css.content}>{children}</Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainWrapper;
