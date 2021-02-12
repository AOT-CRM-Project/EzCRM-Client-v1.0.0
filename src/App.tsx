import React from 'react';
import LogPages from './component/LogPages/LogPages';
import ContactTable from './component/ContactTable';
import ResetPwdSuccess from './component/pages/SuccessNotification/ResetPwdSuccess/ResetPwdSuccess';
import SignupSuccess from './component/pages/SuccessNotification/SignupSuccess/SignupSuccess'

export default function App() {
  return (
    <>
      <LogPages />

      <ContactTable />

      <ResetPwdSuccess />

      <SignupSuccess />

    </>
  );
}
