import React from 'react';
import './App.css';

import Header from './components/Header';
import Routes from './routes';
import Footer from './components/Footer';
import Square from './components/Square';

function App() {
  return (
    <div className="app">
        <Header/>
        <Routes/>
        <Square/>
        <Footer/>
    </div>
  );
}

export default App;
