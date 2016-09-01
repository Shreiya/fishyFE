import React, { Component } from 'react';
import helpers from '../utilities/authHelper';
import { Link } from 'react-router';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : "",
      pw : "",
      displayName: window.localStorage.getItem("displayName"),
      userId: window.localStorage.getItem("uid"),
      fishyName: window.localStorage.getItem("fishyName")
    }
  }



  signIn(event){
    event.preventDefault();
    helpers.logIn(this.state.email, this.state.pw)
  }

  render() {
    return(
      <div className="SignInBox">
        <h1>Log In!</h1>
        <form className="form-inline">
          <div className="form-group">
            <label className="sr-only">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" onChange={(event) => this.setState({email: event.target.value})} />
          </div>
          <div className="form-group">
            <label className="sr-only">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password" onChange={(event) => this.setState({pw: event.target.value})} />
          </div>
          <button type="submit" className="btn btn-default" onClick={(event) => this.signIn(event)}><Link to="/controlServo">Lets do this!</Link></button>
        </form>
      </div>
    )
  }


}

export default SignIn;
