// @flow
import React, { PureComponent, type Node } from 'react';
import sizeMe from 'react-sizeme';
import { Animate } from 'react-move';

type SizeType = {
  height: number,
};

type PropType = {
  className: Object,
  children: Node,
  size: SizeType,
  parent: Object,
};

type StateType = {
  appearanceOffset: number,
  duration: number,
  opacity: number,
  pageOffset: number,
};

class StickyHeader extends PureComponent<PropType, StateType> {
  parent: Object;
  isScrolling: boolean;
  physicalDOM: ?Object;
  button: ?HTMLDivElement;

  constructor(props: PropType) {
    super(props);
    this.state = {
      appearanceOffset: props.size.height,
      duration: 0,
      opacity: 1,
      pageOffset: 0,
    };
    this.parent = props.parent || window;
    this.parent.onscroll = this.handleScroll;
    this.isScrolling = false;
  }
  componentDidMount() {
    this.setSiblingOffset(this.props);
  }
  componentWillReceiveProps(nextProps: PropType) {
    if (nextProps.size.height !== this.props.size.height) {
      this.setSiblingOffset(nextProps);
    }
  }
  setSiblingOffset = ({ size }: Object) => {
    if (this.physicalDOM) {
      this.physicalDOM.nextElementSibling.style.top = `${size.height}px`;
    }
  };
  handleScroll = () => {
    this.parent.clearTimeout(this.isScrolling);
    let { appearanceOffset, opacity } = this.state;
    const headerHeight = this.props.size.height;
    const pageOffset = this.parent.pageYOffset;
    const lastScroll = this.parent.pageYOffset - this.state.pageOffset;

    const opacityPercentage = 1 / headerHeight;
    const headerUnpinned = pageOffset < headerHeight;
    appearanceOffset -= lastScroll;
    if (appearanceOffset > 0) appearanceOffset = 0;
    else if (appearanceOffset < -headerHeight) appearanceOffset = -headerHeight;
    opacity -= opacityPercentage * lastScroll;
    if (opacity > 1 || headerUnpinned) opacity = 1;
    else if (opacity < 0) opacity = 0;
    this.setState({
      appearanceOffset,
      duration: 0,
      opacity,
      pageOffset,
    });
    this.isScrolling = this.parent.setTimeout(
      this.handleStopScroll.bind(this, {
        appearanceOffset,
        headerHeight,
        headerUnpinned,
      }),
      66,
    );
  };
  handleStopScroll = ({
    appearanceOffset,
    headerHeight,
    headerUnpinned,
  }: Object) => {
    const tolerance = headerHeight / 4 * 1;
    let newAppearanceOffset = appearanceOffset;
    let newOpacity = 0;
    if (newAppearanceOffset >= -tolerance || headerUnpinned) {
      newAppearanceOffset = 0;
      newOpacity = 1;
    } else if (newAppearanceOffset < -tolerance) {
      newAppearanceOffset = -headerHeight;
      newOpacity = 0;
    }
    this.setState({
      appearanceOffset: newAppearanceOffset,
      opacity: newOpacity,
      duration: 50,
    });
  };
  mapStyles = ({ transformY, opacity }: Object): Object => ({
    opacity,
    position: 'fixed',
    top: 0,
    transform: `translate3d(0, ${transformY}px, 0)`,
    WebkitTransform: `translate3d(0, ${transformY}px, 0)`,
    msTransform: `translate(0, ${transformY}px)`,
    width: '100%',
    zIndex: 99,
  });
  updateAnimation = ({
    appearanceOffset,
    opacity,
    duration,
  }: StateType): Array<Object> => [
    {
      opacity: [opacity],
      timing: { duration },
    },
    {
      transformY: [appearanceOffset],
      timing: { duration },
    },
  ];
  render() {
    const { className, children } = this.props;
    const animProps = {
      show: true,
      start: { transformY: 0, opacity: 1 },
      update: this.updateAnimation(this.state),
    };
    return (
      <Animate {...animProps}>
        {(state: Object): Node => (
          <div
            ref={(el: ?HTMLDivElement): ?HTMLDivElement =>
              (this.physicalDOM = el)
            }
            style={this.mapStyles(state)}
            className={className}>
            {children}
          </div>
        )}
      </Animate>
    );
  }
}

export default sizeMe({ monitorHeight: true })(StickyHeader);
