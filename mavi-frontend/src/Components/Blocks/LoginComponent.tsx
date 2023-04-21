import React from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { DEFAULT_PROFILE_OBJ } from "../../config";
import Router from "./RouterComponent";
import { ProfileObjT } from "../../types";
import jwt_decode from "jwt-decode";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  justify-content: center;
  align-items: center;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Login = (): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<Boolean>(false);
  const [userData, setUserData] =
    React.useState<ProfileObjT>(DEFAULT_PROFILE_OBJ);
  const [errorMsg, setErrMsg] = React.useState<string>("");

  const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const decode: ProfileObjT = jwt_decode<ProfileObjT>(
        credentialResponse.credential
      );
      setIsLoggedIn(true);
      setUserData(decode);
    } else {
      setIsLoggedIn(false);
      setUserData(DEFAULT_PROFILE_OBJ);
      setErrMsg("Sign in unsuccessful");
    }
  };

  const handleLoginFailure = () => {
    setIsLoggedIn(false);
    setUserData(DEFAULT_PROFILE_OBJ);
    setErrMsg("Sign in unsuccessful");
  };

  return (
    <React.Fragment>
      {isLoggedIn ? (
        <Router userData={userData} />
      ) : (
        <Container>
          <ContentBox>
            <h1
              style={{
                marginTop: 0,
              }}
            >
              Mavi
            </h1>
            <p>Not for everyone to access</p>
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginFailure}
              useOneTap
            />
          </ContentBox>
        </Container>
      )}
    </React.Fragment>
  );
};

export default Login;
