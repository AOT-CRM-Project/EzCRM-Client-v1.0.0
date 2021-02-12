import React from 'react';
import ForgetPwdPage from './ForgetPwdPage/ForgetPwdPage';
import LoginPage from './LoginPage/LoginPage';
import ResetPwdPage from './ResetPwdPage/ResetPwdPage';
import ResetPwdSuccess from './ResetPwdSuccess/ResetPwdSuccess';
import SignUpPage from "./SignUpPage/SignUpPage";
import SignupSuccess from './SignupSuccess/SignupSuccess';

export default function UserAccountPages() {
    return (
      <>
      <SignUpPage />
      <ResetPwdPage  />
      <LoginPage active />
      <ForgetPwdPage />
      <SignupSuccess />
      <ResetPwdSuccess />
        
        </>
    );
  }

  

