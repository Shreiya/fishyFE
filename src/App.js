import React, { Component } from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Nav} from 'react-bootstrap';
import './App.css';

//Remember to put a progress bar here!


class App extends Component {



  render() {
    return (
      <div className="App">
        <ul className="nav nav-tabs">
          <li role="presentation" className="landingPage"><Link to="/sign-up">Sign Up!</Link></li>
          <li role="presentation" className="landingPage"><Link to="/sign-in">Sign In!</Link></li>
          <li role="presentation" className="landingPage"><Link to="/about">About FMF</Link></li>
          <li role="presentation" className="landingPage"><Link to="/giphy-time">Get Fishies with Giphy!</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
