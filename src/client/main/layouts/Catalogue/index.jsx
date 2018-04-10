//@flow
import React, { PureComponent, cloneElement, type Node } from 'react';
import join from 'classnames';
import injectSheet from 'react-jss';

import styles from './styles';
import Slider from '../../../../components/Slider';

type ThemeType = {
  slider: { itemWidth: number },
};

type PropType = {
  children: Node,
  classes: Object,
  renderSliderItem: Function,
  renderSliderItems: Function,
  renderNavItem: Function,
  sliderDatas: Array<Object>,
  headline: string,
  sliderHeadline: string,
  className: string,
  navDatas: Array<{ placeholder: string }>,
  theme: ThemeType,
};

class CatalogueLayout extends PureComponent<PropType> {
  static defaultProps = {
    renderSliderItem: () => {
      console.warn(
        'renderSliderItems is required, you probably forget or misspelled the props',
      );
    },
  };
  renderSliderItems = () => {
    const { renderSliderItem, sliderDatas, classes } = this.props;
    if (!renderSliderItem || !sliderDatas) return null;
    return sliderDatas.map((data: Object): Object => {
      const sliderItem = renderSliderItem(data);
      return cloneElement(sliderItem, {
        className: join(sliderItem.props.className, classes.sliderItem),
      });
    });
  };
  renderContentNav = () => {
    const { renderNavItem, navDatas, classes } = this.props;
    if (!renderNavItem || !navDatas) return null;
    return navDatas.map((data: Object): Object => {
      const navItem = renderNavItem(data);
      return cloneElement(navItem, {
        className: join(navItem.props.className, classes.navItem),
      });
    });
  };
  render() {
    const {
      children,
      className,
      classes,
      sliderHeadline,
      headline,
      theme,
    } = this.props;
    return (
      <div className={className}>
        <div className={classes.headlineRow}>
          <div className={classes.header}>
            <div className={classes.headerContent}>
              <h2 className={classes.headline}>{headline}</h2>
            </div>
          </div>
          <div className={classes.slider}>
            <div className={classes.sliderContent}>
              <Slider
                itemSize={theme.slider.itemWidth}
                itemCount={this.props.sliderDatas.length}
                headline={sliderHeadline}>
                {this.renderSliderItems()}
              </Slider>
            </div>
          </div>
        </div>
        <div className={classes.contentRow}>
          <div className={classes.contentCol}>
            <nav className={classes.contentNav}>{this.renderContentNav()}</nav>
          </div>
          <div className={classes.contentCol}>
            <div className={classes.contentBody}>{children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(CatalogueLayout);
