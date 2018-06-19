import React, {Component} from 'react';
import {ErrorBoundary} from 'containers/Error/';
import {connect, history} from 'redux-saga-wrappo';
import {ConnectedRouter} from 'react-router-redux';
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import {pageSaga} from 'actions/saga/';
import Router from './Router';

class App extends Component {
  componentWillMount() {}
  shouldComponentUpdate(nextProps) {
    const shouldUpdate =
      nextProps.isLoading !== this.props.isLoading ||
      nextProps.progressInd !== this.props.progressInd;

    return shouldUpdate;
  }
  render() {
    return (
      <ErrorBoundary>
        <LocaleProvider locale={zh_CN}>
          <ConnectedRouter history={history}>
            <Router />
          </ConnectedRouter>
        </LocaleProvider>
      </ErrorBoundary>
    );
  }
}
const connectConfig = {
  mapStateToProps: state => {
    return {
      isLoading: state.pageModel.isLoading,
      progressInd: state.pageModel.progressInd,
    };
  },
};
export default connect(connectConfig)(App);
