import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import RepoDetails from './components/RepoDetails';
import { reportWebVitals } from './reportWebVitals';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RepoTable from './components/RepoTable';

const appData = {};
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<RepoTable appData={appData} />} />
          <Route path="details">
            <Route path=":repoId" element={<RepoDetails appData={appData} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
