import { UserButton } from '@clerk/clerk-react';
import React from 'react';

const ProtectedPage = () => {
  return (
    <div>
      <h1>Protected page</h1>
      <UserButton />
    </div>
  );
};

export default ProtectedPage;
