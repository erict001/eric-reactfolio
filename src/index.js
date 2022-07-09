import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from '../src/components/Home';
import Portfolio from '../src/components/Portfolio';
import Contact from '../src/components/Contact';
import Resume from '../src/components/Resume';
import Denali from './components/Denali';
import City from './components/City';
import Fenix from './components/Fenix';
import Apollo from './components/Apollo';
import ApolloAccomplishments from './components/apolloAccomplishments';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/" element={<Home />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/denali" element={<Denali />} />
    <Route path="/city" element={<City />} />
    <Route path="/fenix" element={<Fenix />} />
    <Route path="/apollo" element={<Apollo />} />
    <Route path="/apolloAccomplishments" element={<ApolloAccomplishments />} />

  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
