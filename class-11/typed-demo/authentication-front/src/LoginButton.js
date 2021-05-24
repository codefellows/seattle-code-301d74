import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// known as a hook, they don't work in a class component
// we have to create a function component ( a function that returns HTML / JSX )

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return !isAuthenticated && (
    <button onClick={loginWithRedirect}>Log In</button>
  );
}

export default LoginButton;
