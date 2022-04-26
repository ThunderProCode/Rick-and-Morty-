import { HashRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import Favorites from './Container/Favorites/Favorites';
import React from 'react';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/"  element={<App/>}/>
        <Route path="/Rick-and-Morty/favorites"  element={<Favorites/>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
