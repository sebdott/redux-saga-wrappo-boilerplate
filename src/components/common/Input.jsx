// @flow
import React, { Fragment, type Node } from 'react';
import join from 'classnames';
import injectSheet from 'react-jss';

import { Tooltip } from './Tooltip';
import { Icon } from './Icon';

const tipTypeEnum = {
  error: 'error',
  warning: 'warning',
  info: 'info',
};

type InputType = {
  tip: {
    type: $Values<typeof tipTypeEnum>,
    message: string,
  },
  name: string,
  classes: Object,
  className: string,
};

let Input = ({ classes, className, tip, ...otherProps }: InputType): Node => {
  const _this = Input;
  const renderTip = ({ type, message }: Object): Node => {
    if (!message) return null;
    return (
      <Fragment>
        <a
          data-tip
          data-for={otherProps.name}
          className={classes.tooltipToggle}>
          <Icon name="exclamation-circle" prefix="fas" />
        </a>
        <Tooltip id={otherProps.name} type={type}>
          <span>{message}</span>
        </Tooltip>
      </Fragment>
    );
  };

  const inputProps = {
    ...otherProps,
    className: classes.input,
  };
  return (
    <div
      className={join(classes.container, className)}
      ref={(el: any): any => (_this.inputContainer = el)}>
      <input {...inputProps} aria-describedby={otherProps.name} />
      {tip && renderTip(tip)}
    </div>
  );
};

const styles = ({ colors, tooltip }: Object): Object => ({
  container: {
    position: 'relative',
  },
  input: {
    background: 'transparent',
    border: '0 solid transparent',
    color: 'inherit',
    display: 'inline-block',
    font: 'inherit',
    height: '100%',
    maxWidth: '100%',
    outline: 'inherit',
    padding: 0,
    position: 'relative',
  },
  tooltipToggle: {
    position: 'absolute',
    color: colors.error,
    right: '0.5rem',
    top: '50%',
    transform: 'translate3d(0, -50%, 0)',
    WebkitTransform: 'translate3d(0, -50%, 0)',
    msTransform: 'translate(0, -50%, 0)',
  },
});

Input = injectSheet(styles)(Input);

export { Input };
