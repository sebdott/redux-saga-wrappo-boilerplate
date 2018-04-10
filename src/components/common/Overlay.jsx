//@flow
import React, { type Node } from 'react';
import { Animate } from 'react-move';
import { easePolyInOut } from 'd3-ease';

const defaultStyle = {
  display: 'block',
  position: 'fixed',
  zIndex: 0,
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

type PropType = {
  isVisible: boolean,
  onClick: Function,
  style: Object,
};

const Overlay = ({ isVisible, style, onClick }: PropType): Node => {
  const animProps = {
    show: isVisible,
    start: {
      o: 0,
    },
    enter: {
      o: [0.6],
      timing: { duration: 700, ease: easePolyInOut },
    },
    leave: {
      o: [0],
      timing: { duration: 700, ease: easePolyInOut },
    },
  };
  return (
    <Animate {...animProps}>
      {(state: Object): Node => {
        const { o } = state;
        const animStyle = {
          background: `rgba(255, 255, 255, ${o}`,
        };
        return (
          <div
            onClick={onClick}
            style={{ ...defaultStyle, ...style, ...animStyle }}
          />
        );
      }}
    </Animate>
  );
};

Overlay.defaultProps = {
  isVisible: false,
};

export { Overlay };
