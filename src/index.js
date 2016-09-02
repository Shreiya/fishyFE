import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import giphy from './Feeding/giphy';
import signUp from './Login/SignUp';
import signIn from './Login/SignIn';
import about from './Static/about';
import controlServo from './Feeding/controlServo';
import viewSaved from './Feeding/viewSaved';
import deadFish from './Feeding/deadFish';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
        <Route path="/" component={App} />
          <Route path="/sign-up" component={signUp} />
          <Route path="/sign-in" component={signIn} />
          <Route path="/giphy-time" component={giphy} />
          <Route path="/about" component={about} />
          <Route path="/controlServo" component={controlServo} />
          <Route path="/viewSaved" component={viewSaved} />
          <Route path="/deadFish" component={deadFish} />
  </Router>
  ,document.getElementById('root')
);
