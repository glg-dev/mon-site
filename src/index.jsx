import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './layouts/Navigation';
import Stars from './components/Stars';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Error from './pages/Error';
import './styles/styles.scss'
import Footer from './layouts/Footer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Stars />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

