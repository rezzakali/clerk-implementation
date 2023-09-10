import React from 'react';
import { Link } from 'react-router-dom';

const PublicPage = () => {
  return (
    <div>
      {' '}
      <h1>Public page</h1>
      <Link to="/protected">Go to protected page</Link>
    </div>
  );
};

export default PublicPage;
