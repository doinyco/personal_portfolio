import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Experience from "./components/Experience.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/personal_portfolio/" element={<App />} />
      <Route path="personal_portfolio/about" element={<About />}/>
      <Route path="personal_portfolio/projects" element={<Projects />} />
      <Route path="personal_portfolio/experience" element={<Experience />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
