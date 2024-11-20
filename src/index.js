import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/Home';
import Calculator from './pages/Calculator/Calculator';
import Projects from './pages/Projects/Projects';
import Chess from './pages/Chess/Chess';

export default function App() {
  return(
    <HashRouter>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Projects/Calculator" element={<Calculator/>} />
          <Route path="/Projects/Chess" element={<Chess/>} />
      </Routes>
    </HashRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
