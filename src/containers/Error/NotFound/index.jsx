import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = ({classes}) => {
  return (
    <div>
      <h3>404</h3>
      <p>Have Lost Your Way? </p>
      <p>Click here to go back to home</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
