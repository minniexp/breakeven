// import logo from './logo.svg';
import React from "react"
import { Routes, Route } from 'react-router-dom';
import Chase from './pages/Chase';
import CapitalOne from './pages/CapitalOne';
import Amex from './pages/Amex';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="window">
      <Navbar/>

        {/* <div className="window-comp">
          <Navbar/>
        </div>
        <div className="window-comp">
          <Home/>
        </div> */}
      <div className="window-main">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Chase' element={<Chase />}/>
            <Route path='/CapitalOne' element={<CapitalOne />} />
            <Route path='/Amex' element={<Amex />} />
        </Routes> 
      </div>

    </div>
  );
}

export default App;

/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/