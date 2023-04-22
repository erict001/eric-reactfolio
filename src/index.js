import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from '../src/components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Nav from './components/Navbar';
import Icon from './components/Icons';
import Carousel from './components/Carousel';
import Modal from './components/Modal';
import AboutSection from './components/AboutSection';
import MyStory from './components/MyStory';
import MyModal from './components/myModal';
import MyModal2 from './components/myModal2';
import Languages from './components/Languages';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/" element={<Home />} />
    <Route path="/" element={<Nav />} />
    <Route path="/" element={<Icon />} />
    <Route path="/about-section" element={<AboutSection />} />
    <Route path="/modal" element={<Modal />} />
    <Route path="/my-modal" element={<MyModal />} />
    <Route path="/my-languages" element={<Languages />} />
    <Route path="/my-modal" element={<MyModal2 />} />
    <Route path="/carousel" element={<Carousel />} />
    <Route path="/about" element={<MyStory />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
