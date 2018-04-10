// @flow
import React, { Component } from 'react';
import sizeMe from 'react-sizeme';
import { round } from 'lodash';
import injectSheet from 'react-jss';
import NukaCarousel from 'nuka-carousel';
import { Icon } from '../common/';
import styles from './styles';

type PropType = {
  children: Node,
  classes: Object,
  header: string,
  headline: string,
  itemShownPerSlide: number,
  itemCount: number,
  pagingDots: string,
  size: Object,
  itemSize: number,
};

type StateType = {
  currentSlide: number,
  slidesToScroll: number,
};

class Slider extends Component<PropType, StateType> {
  Slider: ?Object;

  constructor(props: PropType) {
    super(props);
    this.state = { currentSlide: 0, slidesToScroll: 0 };
    this.Slider = null;
  }

  static defaultProps = {
    itemSize: 240,
  };

  onSliderRight = (): any => {
    if (!this.Slider) return null;
    const { currentSlide, slidesToScroll } = this.Slider.state;
    const slide = currentSlide + slidesToScroll;
    this.Slider.goToSlide(slide);
  };
  onSliderLeft = (): any => {
    if (!this.Slider) return null;
    const { currentSlide, slidesToScroll } = this.Slider.state;
    let slide = currentSlide - slidesToScroll;
    if (slide <= 0) slide = 0;
    this.Slider.goToSlide(slide);
  };
  onDotClick = (index: number) => {
    if (this.Slider) {
      const { slidesToScroll } = this.state;
      this.Slider.goToSlide(index * slidesToScroll);
      this.setState({
        currentSlide: index * slidesToScroll,
      });
    }
  };
  getSliderRef = (el: any) => {
    if (el && this.Slider !== el) {
      this.Slider = el;
    }
  };
  getCurrentIndex = (): any => {
    if (!this.Slider) return null;
  };
  renderBottomCenterControls = () => {
    if (!this.Slider) return null;
    const { itemCount, classes } = this.props;
    const { slidesToScroll, currentSlide } = this.Slider.state;
    let totalSlide = round(itemCount / slidesToScroll);
    let pagingDots = [];
    if (totalSlide !== Infinity) {
      for (let index = 0; index < totalSlide; index++) {
        const btnIsActive = index * slidesToScroll === currentSlide;
        const dotButton = (
          <button
            data-index={index}
            data-active={btnIsActive}
            key={index}
            onClick={this.onDotClick.bind(this, index)}
            className={classes.pagingDot}
          />
        );
        pagingDots.push(dotButton);
      }
    }

    // pagingDots = reverse(pagingDots);
    return <div className={this.props.pagingDots}>{pagingDots}</div>;
  };
  renderCenterRightControls = () => {
    if (!this.Slider) return null;
    const { itemCount } = this.props;
    const { currentSlide, slidesToScroll } = this.Slider.state;
    if (currentSlide + slidesToScroll >= itemCount) return null;
    return (
      <button
        onClick={this.onSliderRight}
        className={this.props.classes.toggleButton}>
        <Icon name="angle-right" prefix="fas" />
      </button>
    );
  };
  renderCenterLeftControls = () => {
    if (!this.Slider || this.Slider.state.currentSlide === 0) return null;
    const { currentSlide } = this.Slider.state;
    const { classes } = this.props;
    return (
      <button
        onClick={this.onSliderLeft}
        className={classes.toggleButton}
        disabled={currentSlide === 0}>
        <Icon name="angle-left" prefix="fas" />
      </button>
    );
  };
  render() {
    const { classes, size, itemSize, headline, children } = this.props;
    const itemShownPerSlide = round(size.width / itemSize);
    const SliderProps = {
      heightMode: 'max',
      ref: this.getSliderRef,
      renderBottomCenterControls: this.renderBottomCenterControls,
      renderCenterLeftControls: this.renderCenterLeftControls,
      renderCenterRightControls: this.renderCenterRightControls,
      slidesToScroll: itemShownPerSlide,
      slidesToShow: itemShownPerSlide,
    };
    return (
      <div className={classes.container}>
        <h2 className={classes.headline}>{headline}</h2>
        <NukaCarousel {...SliderProps}>{children}</NukaCarousel>
      </div>
    );
  }
}

export default sizeMe()(injectSheet(styles)(Slider));
