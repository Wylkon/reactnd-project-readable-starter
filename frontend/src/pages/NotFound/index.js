import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <p>Sorry, error 404.</p>
      <Link to="/">Go to home</Link>
    </div>
  );
};
