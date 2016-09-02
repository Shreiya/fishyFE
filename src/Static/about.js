import React, { Component } from 'react';
import './about.css';
import { Link } from 'react-router';

class about extends Component {

  render() {
    return(
      <div className="hiro">
        <ul className="nav nav-tabs" id="aboutMe">
          <li role="presentation" className="landingPage"><Link to="/">|Home|</Link></li>
          <li role="presentation" className="landingPage"><Link to="/sign-up">|Sign Up|</Link></li>
          <li role="presentation" className="landingPage"><Link to="/sign-in">|Sign In|</Link></li>
          <li role="presentation" className="landingPage"><Link to="/giphy-time">|Get Fishies with Giphy|</Link></li>
          <li role="presentation" className="landingPage"><Link to="/deadFish">|What happens when you don't feed fishy|</Link></li>
        </ul>
      </div>


    )
  }
}

export default about;
