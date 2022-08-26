import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route, Navbar} from "react-router-dom"
import Home from '../src/components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Denali from './components/Denali';
import City from './components/City';
import Fenix from './components/Fenix';
import Apollo from './components/Apollo';
import ApolloAccomplishments from './components/apolloAccomplishments';
import CityAccomplishments from './components/cityAccomplishments';
import Nav from './components/Navbar';
import Icon from './components/Icons';
import Carousel from './components/Carousel';
import Modal from './components/Modal';
import TWOU from './components/2U';
import AboutSection from './components/AboutSection';
import uwAccomplishments from './components/washingtonAccomplishments';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/" element={<Home />} />
    <Route path="/" element={<Nav />} />
    <Route path="/" element={<Icon />} />
    <Route path="/2u" element={<TWOU />} />
    <Route path="/udub" element={<uwAccomplishments />} />
    <Route path="/about-section" element={<AboutSection />} />
    <Route path="/modal" element={<Modal />} />
    <Route path="/carousel" element={<Carousel />} />
    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/denali" element={<Denali />} />
    <Route path="/city" element={<City />} />
    <Route path="/fenix" element={<Fenix />} />
    <Route path="/apollo" element={<Apollo />} />
    <Route path="/apolloAccomplishments" element={<ApolloAccomplishments />} />
    <Route path="/cityAccomplishments" element={<CityAccomplishments />} />
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
