import React, {Component} from 'react';
import {map} from 'lodash';
import {Route, Switch, Redirect} from 'react-router-dom';

class Routes extends Component {
  renderRouters() {
    const {routeList} = this.props;

    return map(routeList, (route, index) => {
      if (route.redirect) {
        return <Redirect key={index} {...route} />;
      }
      return <Route key={index} {...route} />;
    });
  }
  render() {
    return <Switch>{this.renderRouters()}</Switch>;
  }
}
export default Routes;
