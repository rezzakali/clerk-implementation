import {
  RedirectToSignIn,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
} from '@clerk/clerk-react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CurrentUser from './pages/CurrentUser';
import ProtectedPage from './pages/ProtectedPage';
import PublicPage from './pages/PublicPage';
import Session from './pages/Session';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route path="/session" element={<Session />} />
        <Route path="/current-user" element={<CurrentUser />} />
        <Route
          path="/protected"
          element={
            <>
              <SignedIn>
                <ProtectedPage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
