import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h1>Sorry, this page is not found. 404</h1>
      <Link to="/">Click here to redirect on main page</Link>
    </>
  );
};

export default NotFoundPage;
