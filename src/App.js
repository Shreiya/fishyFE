import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

//Remember to put a progress bar here!


class App extends Component {



  render() {
    return (
      <div className="App">
      <button><Link to="/sign-up">Sign Up!</Link></button>
        <button><Link to="/sign-in">Sign In!</Link></button>
        <button><Link to="/about">Just Read Some Stuff!</Link></button>
        <button><Link to="/giphy-time">Get Fishies with Giphy!</Link></button>
      </div>
    );
  }
}

export default App;
