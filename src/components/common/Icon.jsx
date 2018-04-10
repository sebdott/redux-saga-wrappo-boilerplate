// @flow
import React, { type Node } from 'react';
import injectSheet from 'react-jss';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';

fontawesome.library.add(solid, regular);

type FonIconType = {
  name?: string,
  prefix?: string,
  classes: Object,
  otherProps: Object,
};

const Icon = ({
  prefix = 'far',
  name = 'question-circle',
  className,
  classes,
  ...otherProps
}: Object): Node => {
  return (
    <FontAwesomeIcon
      icon={[prefix, name]}
      style={{ fontSize: 'inherit', color: 'inherit', verticalAlign: 'middle' }}
    />
  );
};

export { Icon };
