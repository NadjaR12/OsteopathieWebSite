import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home';
import Impressum from './pages/Impressum/Impressum';
import Privacy from './pages/Privacy/Privacy';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import TransButton from './components/TransButton/TransButton';


class App extends Component {
  render() {  
    return (
      <Router>
      <div className="App grid-wrapper">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/impressum' element={<Impressum />}/>
          <Route path='/datenschutz' element={<Privacy />}/>
        </Routes>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
