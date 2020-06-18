import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You have succesfully deployed your React App.
        </p>
        <a
          className="App-link"
          href="https://hitik20.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hitik
        </a>
      </header>
    </div>
  );
}

export default App;
