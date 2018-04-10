import React, { Component } from 'react';
import deepmerge from 'deepmerge';
import { JssProvider, ThemeProvider } from 'react-jss';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import styles from './styles';
import { connect } from 'redux-saga-wrappo/connect';
import { getClientItem } from '../utils';
import Wrapper from '../components/MainWrapper/';
import { ErrorBoundary, NotFound } from '../components/Error/';
import Example from '../pages/Example/';
import normalize from 'normalize-jss';
import injectSheet from 'react-jss';
import createJSS from './createJss';

const GlobalStyles = injectSheet(normalize, { isolate: false })();

class App extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.location.pathname !== this.props.location.pathname;
  }
  mapStyles = ({ opacity, y }) => ({
    opacity,
    transform: `translate3d(0, ${y}px, 0)`,
    WebkitTransform: `translate3d(0, ${y}px, 0)`,
    msTransform: `translate(0, ${y}px)`,
  });
  render() {
    const { clientTheme, location, classes } = this.props;
    const { jss, theme } = createJSS(this.props.themes.defaultTheme);
    return (
      <GlobalStyles>
        <ThemeProvider theme={deepmerge(theme, clientTheme || {})}>
          <JssProvider jss={jss}>
            <ErrorBoundary>
              <Wrapper
                className={classes.container}
                pathname={location.pathname}>
                <AnimatedSwitch
                  atEnter={{ opacity: 0, y: -100 }}
                  atActive={{ opacity: 1, y: 0 }}
                  atLeave={{ opacity: 0, y: 100 }}
                  mapStyles={this.mapStyles}
                  className={classes.container}
                  location={location}>
                  <Route exact path="/" component={Example} />
                  <Route component={NotFound} />
                </AnimatedSwitch>
              </Wrapper>
            </ErrorBoundary>
          </JssProvider>
        </ThemeProvider>
      </GlobalStyles>
    );
  }
}
export default getClientItem(['themes'])(connect({ styles })(App));
