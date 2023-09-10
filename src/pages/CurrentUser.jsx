import { useUser } from '@clerk/clerk-react';
import React from 'react';

const CurrentUser = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return <div>Hello, {user.firstName} welcome to Clerk</div>;
};

export default CurrentUser;
