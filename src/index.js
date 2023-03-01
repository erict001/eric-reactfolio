import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
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




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="salty-beyond-13820.herokuapp.com" element={<App />} />
    <Route path="salty-beyond-13820.herokuapp.com" element={<Home />} />
    <Route path="salty-beyond-13820.herokuapp.com" element={<Nav />} />
    <Route path="salty-beyond-13820.herokuapp.com" element={<Icon />} />
    <Route path="salty-beyond-13820.herokuapp.com/2u" element={<TWOU />} />
    <Route path="salty-beyond-13820.herokuapp.com/udub" element={<uwAccomplishments />} />
    <Route path="salty-beyond-13820.herokuapp.com/about-section" element={<AboutSection />} />
    <Route path="salty-beyond-13820.herokuapp.com/modal" element={<Modal />} />
    <Route path="salty-beyond-13820.herokuapp.com/carousel" element={<Carousel />} />
    <Route path="salty-beyond-13820.herokuapp.com/about" element={<About />} />
    <Route path="salty-beyond-13820.herokuapp.com/portfolio" element={<Portfolio />} />
    <Route path="salty-beyond-13820.herokuapp.com/contact" element={<Contact />} />
    <Route path="salty-beyond-13820.herokuapp.com/resume" element={<Resume />} />
    <Route path="salty-beyond-13820.herokuapp.com/denali" element={<Denali />} />
    <Route path="salty-beyond-13820.herokuapp.com/city" element={<City />} />
    <Route path="salty-beyond-13820.herokuapp.com/fenix" element={<Fenix />} />
    <Route path="salty-beyond-13820.herokuapp.com/apollo" element={<Apollo />} />
    <Route path="salty-beyond-13820.herokuapp.com/apolloAccomplishments" element={<ApolloAccomplishments />} />
    <Route path="salty-beyond-13820.herokuapp.com/cityAccomplishments" element={<CityAccomplishments />} />
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
