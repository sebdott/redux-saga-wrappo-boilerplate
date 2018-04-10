import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import styles from './styles';

const NotFound = ({ classes }) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.headline}>404</h3>
      <p className={classes.paragraph}>Please go back to the main page</p>
      <Link className={classes.link} to="/">
        Main Page
      </Link>
    </div>
  );
};

export default injectSheet(styles)(NotFound);
