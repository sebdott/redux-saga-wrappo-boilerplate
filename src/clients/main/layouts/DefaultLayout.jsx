//@flow
import React, {PureComponent, type Node} from 'react';

type PropType = {
  children: Node,
};

class DefaultLayout extends PureComponent<PropType> {
  render() {
    const {children} = this.props;
    return <div>{children}</div>;
  }
}

export default DefaultLayout;
