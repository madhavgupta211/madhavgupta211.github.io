import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import Home from './Components/Blocks/HomeComponent';
import './App.css';

function App () {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
