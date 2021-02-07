import React from 'react';
import ForgetPwdPage from './ForgetPwdPage/ForgetPwdPage';
import LoginPage from './LoginPage/LoginPage';
import './LogPages.css';
import ResetPwdPage from './ResetPwdPage/ResetPwdPage';
import SignUpPage from "./SignUpPage/SignUpPage";

export default function LogPages() {
    return (
      <>
      <SignUpPage />
      <ResetPwdPage  />
      <LoginPage active/>
      <ForgetPwdPage />
        
        </>
    );
  }

  
// const LogPages = () => {

//  <SignUpPage />

// };

// export default LogPages;

// export default function App() {
//     return (
//       <>
//         <h1>
//           Welcome to EzOzCRM-Client-v1.0.0
//         </h1>
//         <TestComponent />
//         <LogPages />
//       </>
//     );
//   }
