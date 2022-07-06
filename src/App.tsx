import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import useApplicationData from './hooks/useApplicationData';
import './App.css';

export function App() {
  const appData = useApplicationData();

  useEffect(() => {
    document.title = 'Repo-Explorer';
  }, []);

  return (
    <div className="App">
      <h2>Repo-Explorer</h2>
      <Outlet context={appData} />
    </div>
  );
}
