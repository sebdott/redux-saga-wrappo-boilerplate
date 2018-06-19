import React, {Component} from 'react';
import pathToRegexp from 'path-to-regexp';
import {map} from 'lodash';
import {Link} from 'react-router-dom';
import {connect} from 'redux-saga-wrappo';
import {SiteMap} from 'constants';
import {Breadcrumb} from 'antd';
import getClientItem from 'utils/getClientItem';
import {map} from 'lodash';
import css from './styles.less';

const Item = Breadcrumb.Item;

class BreadcrumbMenu extends Component {
  static defaultProps = SiteMap;
  render() {
    return <Breadcrumb />;
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

export default getClientItem(['assets'])(
  connect(connectConfig)(BreadcrumbMenu),
);
