import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Icon, Layout, Row, Col, Button} from 'antd';
import {connect} from 'redux-saga-wrappo';
import {pageSaga} from 'actions/saga/';
import getClientItem from 'utils/getClientItem';
import Login from './Login';
import sharedCss from '../styles.less';
import css from './styles.less';

const {Header} = Layout;

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowLogo: !props.siderIsVisible,
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      shouldShowLogo: !nextProps.siderIsVisible,
    });
  }
  onLogOut = () => {
    this.props.pageSaga.getUserLogout();
  };
  renderLogOut() {
    const {userModel} = this.props;
    if (userModel.isLogon) {
      return (
        <Button
          className={css.logoutBtn}
          onClick={this.onLogOut}
          type={'primary'}
          loading={this.props.userModel.isLoading}>
          Logout
        </Button>
      );
    }
    return <div />;
  }
  renderHeaderRight() {
    const {userModel} = this.props;
    if (userModel.isLogon) {
      const userLabel = this.renderUserLabel();
      const userLogout = this.renderLogOut();
      return (
        <Col>
          <Icon type="bell" /> {userLabel} {userLogout}
        </Col>
      );
    } else {
      return (
        <Col>
          <Login />
        </Col>
      );
    }
  }
  renderUserLabel() {
    const {username} = this.props.userModel;
    const userInitial = `${username}`.substring(0, 2);
    const backgroundUrl = `https://dummyimage.com/48x48/106ddc/ffffff.png&text=${userInitial}`;

    return (
      <React.Fragment>
        <img alt={'userLogo'} src={backgroundUrl} className={css.userImg} />{' '}
        {username}{' '}
      </React.Fragment>
    );
  }
  renderLogo() {
    const {assets} = this.props;
    const {logo} = assets;
    if (!this.state.shouldShowLogo) return null;
    return (
      <Link
        to="/"
        className={sharedCss.logoAnchor}
        data-fixed={this.state.collapsed}>
        <img src={logo} alt="logo" />
      </Link>
    );
  }

  render() {
    return (
      <Header className={css.header}>
        <Row>
          <Col span={3}>
            <Icon
              data-fixed={this.props.siderIsVisible}
              className={css.trigger}
              type={this.props.siderIsVisible ? 'menu-fold' : 'menu-unfold'}
              onClick={this.props.onMenuToggle}
            />
            {this.renderLogo()}
          </Col>
          <Col span={21} className={css.rightCol}>
            {this.renderHeaderRight()}
          </Col>
        </Row>
      </Header>
    );
  }
}
const connectConfig = {
  mapActionToProps: {pageSaga},
  mapStateToProps: ({userModel}) => {
    return {
      userModel,
    };
  },
};

export default withRouter(
  getClientItem(['assets'])(connect(connectConfig)(MainHeader)),
);
