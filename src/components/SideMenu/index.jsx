// @flow
import React, { Component, type Node } from 'react';
import { map, throttle } from 'lodash';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';
import sizeMe from 'react-sizeme';
import key from 'keymaster';
import { Animate } from 'react-move';
import { easePolyInOut } from 'd3-ease';
import { getClientItem } from '../../utils';
import styles from './styles';
import { Overlay } from '../common/';

type PropType = {
  classes: Object,
  shouldMenuVisible: boolean,
  links: Array<any>,
  parentHeight: number,
  isMenuVisible: Function,
  size: {
    width: number,
    height: number,
  },
  assets: any,
};

type StateType = {
  menuIsVisible: boolean,
  shouldMenuVisible: boolean,
};

class SideMenu extends Component<PropType, StateType> {
  constructor(props: PropType) {
    super(props);
    this.state = {
      menuIsVisible: false,
      shouldMenuVisible: props.shouldMenuVisible,
    };
    this.hideMenu = throttle(this.hideMenu, 1000);
    this.handleMenuToggle = throttle(this.handleMenuToggle, 1000);
  }
  static defaultProps = {
    links: [{ url: '/', placeholder: 'Main' }],
  };
  componentWillReceiveProps(nextProps: PropType) {
    this.setState({
      shouldMenuVisible: nextProps.shouldMenuVisible,
      menuIsVisible: nextProps.shouldMenuVisible,
    });
  }
  componentDidMount() {
    key('esc', (): any => this.hideMenu());
  }
  componentDidUpdate() {
    this.onMenuStateChange();
  }
  handleMenuToggle = () => {
    this.setState({
      menuIsVisible: !this.state.menuIsVisible,
      shouldMenuVisible: !this.state.menuIsVisible,
    });
  };
  hideMenu = () => {
    this.setState({
      menuIsVisible: false,
      shouldMenuVisible: false,
    });
  };
  onMenuStateChange = () => {
    if (this.props.isMenuVisible) {
      this.props.isMenuVisible(this.state.menuIsVisible);
    }
  };
  renderLinks() {
    const { classes, links } = this.props;
    return map(links, (link: any): Node => (
      <Link to={link.url} key={link.placeholder} className={classes.listItem}>
        {link.placeholder}
      </Link>
    ));
  }
  renderContent() {
    const { classes } = this.props;
    return <div className={classes.listBody}>{this.renderLinks()}</div>;
  }
  render() {
    const { classes, size, assets } = this.props;
    const { menuIsVisible } = this.state;
    const { logo } = assets;
    const animProps = {
      show: true,
      start: { x: -size.width },
      update: {
        x: [menuIsVisible ? 0 : -size.width],
        timing: { duration: 700, ease: easePolyInOut },
      },
    };
    return (
      <Animate {...animProps}>
        {(state: any): Node => {
          const { x } = state;
          const transform = {
            transform: `translate3d(${x}px, 0, 0)`,
            WebkitTransform: `translate3d(${x}px, 0, 0)`,
            msTransform: `translate(${x}px, 0)`,
          };
          return (
            <div className={classes.wrapper}>
              <Overlay isVisible={menuIsVisible} onClick={this.hideMenu} />
              <div className={classes.container} style={transform}>
                <nav className={classes.body}>
                  <img src={logo} alt="logo" />
                  {this.renderContent()}
                </nav>
              </div>
            </div>
          );
        }}
      </Animate>
    );
  }
}

export default getClientItem(['assets'])(
  sizeMe({ monitorHeight: true })(injectSheet(styles)(SideMenu)),
);
