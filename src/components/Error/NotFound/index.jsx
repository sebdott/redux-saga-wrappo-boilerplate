import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import styles from './styles';

const NotFound = ({ classes }) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.headline}>找不到 ¯\_(ツ)_/¯</h3>
      <p className={classes.paragraph}>哥你是不是迷路了？ 要不先回首页看看</p>
      <Link className={classes.link} to="/">
        首页
      </Link>
    </div>
  );
};

export default injectSheet(styles)(NotFound);
