import React from 'react';
import {Button, Icon} from 'antd';
import css from './styles.less';

export default function Loading(props) {
  if (props.error) {
    return (
      <div className={css.error}>
        <Icon type="times-circle" className={css.errorIcon} />
        <p className={css.errorMessage}>加载失败</p>
        <Button onClick={props.retry}>重试加载</Button>
      </div>
    );
  } else if (props.timedOut) {
    return (
      <div className={css.error}>
        <Icon type="times-circle" className={css.errorIcon} />
        <p className={css.errorMessage}>加载超时</p>
        <Button onClick={props.retry}>重试加载</Button>
      </div>
    );
  } else if (props.pastDelay) {
    return (
      <div className={css.loading}>
        <Icon type="hourglass" className={css.loadingIcon} spin />
        <p className={css.loadingMessage}>加载中...</p>
      </div>
    );
  } else {
    return null;
  }
}
