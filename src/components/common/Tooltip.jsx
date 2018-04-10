// @flow
import React, { type Node } from 'react';
import join from 'classnames';
import ReactTooltop from 'react-tooltip';
import inhectSheet from 'react-jss';

type ToolTipType = {
  classes: { overwrite: string },
  className: Object,
  children: Node,
};

let Tooltip = ({ classes, className, ...otherProps }: ToolTipType): Node => {
  return (
    <ReactTooltop
      className={join(classes.overwrite, className)}
      {...otherProps}
    />
  );
};

// https://github.com/wwayne/react-tooltip/blob/master/src/index.scss
function _type(color: string): Object {
  return {
    backgroundColor: `${color} !important`,
    '&.place-top': {
      '&::after': {
        borderTopColor: `${color} !important`,
      },
    },
    '&.place-bottom': {
      '&::after': {
        borderBottomColor: `${color} !important`,
      },
    },
    '&.place-left': {
      '&::after': {
        borderLeftColor: `${color} !important`,
      },
    },
    '&.place-right': {
      '&::after': {
        borderRightColor: `${color} !important`,
      },
    },
  };
}

function _border(color: string): Object {
  return {
    borderColor: `${color} !important`,
    '&.place-top': {
      '&:before': {
        borderTopColor: `${color} !important`,
      },
    },
    '&.place-bottom': {
      '&:before': {
        borderBottomColor: `${color} !important`,
      },
    },
    '&.place-left': {
      '&:before': {
        borderLeftColor: `${color} !important`,
      },
    },
    '&.place-right': {
      '&:before': {
        borderRightColor: `${color} important`,
      },
    },
  };
}

// overwriting colors
const styles = ({ tooltip }: Object): Object => ({
  overwrite: {
    '&.type-dark': {
      color: `${tooltip.lightColor} !important`,
      ..._type(tooltip.darkBackground),
      '&.border': {
        ..._border(tooltip.lightBorderColor),
      },
    },
    '&.type-success': {
      color: `${tooltip.lightColor} !important`,
      ..._type(tooltip.successBackground),
      '&.border': {
        ..._border(tooltip.lightBorderColor),
      },
    },
    '&.type-warning': {
      color: `${tooltip.lightColor} !important`,
      ..._type(tooltip.warningBackground),
      '&.border': {
        ..._border(tooltip.lightBorderColor),
      },
    },
    '&.type-error': {
      color: `${tooltip.lightColor} !important`,
      ..._type(tooltip.errorBackground),
      '&.border': {
        ..._border(tooltip.lightBorderColor),
      },
    },
    '&.type-info': {
      color: `${tooltip.lightColor} !important`,
      ..._type(tooltip.infoBackground),
      '&.border': {
        ..._border(tooltip.lightBorderColor),
      },
    },
    '&.type-light': {
      color: `${tooltip.darkColor} !important`,
      ..._type(tooltip.lightBackground),
      '&.border': {
        ..._border(tooltip.darkBorderColor),
      },
    },
  },
});

Tooltip = inhectSheet(styles)(Tooltip);

export { Tooltip };
