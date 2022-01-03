/*import logo from './logo.svg';
import './App.css';

function App() {
  return (  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <p>hola amigas</p>
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
  );
}

export default App;
*/

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Home} from "./components/home";
import { Order } from "./components/waitress/Order";

function App() {
  return (
    <Router>
      </Router>
        );
      }