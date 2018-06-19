// @flow
import React, {type Node} from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';
import css from './styles';

fontawesome.library.add(solid, regular);

type FonIconType = {
  name?: string,
  prefix?: string,
  classes: Object,
  otherProps: Object,
};

const Icon = ({
  iconName,
  className,
  classes,
  onClick,
  ...otherProps
}: Object): Node => {
  let returnValue = {};

  if (onClick) {
    returnValue = (
      <button onClick={onClick.bind(this)} className={css.btn}>
        <FontAwesomeIcon
          icon={iconName}
          style={{fontSize: 'inherit', color: 'inherit'}}
        />
      </button>
    );
  } else {
    returnValue = (
      <FontAwesomeIcon
        icon={iconName}
        style={{fontSize: 'inherit', color: 'inherit'}}
      />
    );
  }

  return <span className={css.iconOuter}>{returnValue}</span>;
};

export default Icon;
