import React from 'react';
import logo from './logo.svg';
import Soroush from './Soroush';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Soroush <code>src/App.js</code> and save to reload.
        </p>
        <Soroush name="Shima"></Soroush>
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
  );
}

export default App;
