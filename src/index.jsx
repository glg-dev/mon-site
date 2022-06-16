import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './layouts/Navigation';
import Stars from './components/Stars';
import Home from './pages/Home';
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
        <Route exact path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

