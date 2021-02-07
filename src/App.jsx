import React from 'react';
import LogPages from './component/LogPages/LogPages';
import ContactTable from './component/ContactTable';

export default function App() {
  return (
    <>
      <h1>
        Welcome to EzOzCRM-Client-v1.0.0
      </h1>

      <LogPages />

      <ContactTable />

    </>
  );
}
