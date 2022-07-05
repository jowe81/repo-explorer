import React from 'react';
import { Outlet } from 'react-router-dom';
import useApplicationData from './hooks/useApplicationData';
import './App.css';

export function App() {
  const appData = useApplicationData();

  return (
    <div className="App">
      <Outlet context={appData} />
    </div>
  );
}
