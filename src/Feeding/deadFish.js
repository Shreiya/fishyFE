import React, {Component} from 'react';
import './deadFish.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router';

class deadFish extends Component{

  render(){
    return(
      <div>
      <ul className="nav nav-tabs">
        <li role="presentation" className="landingPage"><Link to="/">|Home|</Link></li>
        <li role="presentation" className="landingPage"><Link to="/sign-up">|Sign Up|</Link></li>
        <li role="presentation" className="landingPage"><Link to="/sign-in">|Sign In|</Link></li>
        <li role="presentation" className="landingPage"><Link to="/about">|About|</Link></li>
        <li role="presentation" className="landingPage"><Link to="/giphy-time">|Get Fishies with Giphy|</Link></li>
      </ul>
      <div className="deadFish"></div>
      </div>
    )
  }
}

export default deadFish;
