import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import Approuter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Approuter/>
    </BrowserRouter>
     
  );
}

export default App;