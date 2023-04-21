import React from "react";
import Login from "./Components/Blocks/LoginComponent.tsx";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_AUTH_CLIENT_ID } from "./config.tsx";

function App(): JSX.Element {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_AUTH_CLIENT_ID}>
      <Login />
    </GoogleOAuthProvider>
  );
}

export default App;
