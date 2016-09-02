import React, { Component } from 'react';
import helpers from '../utilities/authHelper';
import './SignUp.css';
import {Link} from 'react-router';



class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName : "",
      email : "",
      pw : "",
      fishName : ""
    }
  }

  makeUser(event){
    event.preventDefault();

    let data = {
      userName : this.state.userName,
      fishName : this.state.fishName
    }
    console.log(this.state.email, this.state.pw);
    helpers.signUp(this.state.email, this.state.pw, data)
  }

  render(){
    return(
      <div className="SignUp">
        <ul className="nav nav-tabs" id="signUpUl">
          <li role="presentation" className="landingPagi"><Link to="/">|Home|</Link></li>
          <li role="presentation" className="landingPagi"><Link to="/giphy-time">|Get Fishies with Giphy|</Link></li>
          <li role="presentation" className="landingPagi"><Link to="/deadFish">|What happens when you don't feed fishy|</Link></li>
        </ul>
        <h1>Sign Up!</h1>
        <div>
        <form className="form-inline">
          <div className="form-group">
            <label className="sr-only">Name</label>
            <input type="text" className="form-control" id="exampleInputEmail3" placeholder="Name" onChange={(event) => this.setState({userName: event.target.value})} />

              <input type="text" className="form-control" id="exampleInputEmail3" placeholder="Fishy's Name" onChange={(event) => this.setState({fishName: event.target.value})} />
          </div>
          <div className="form-group">
            <label className="sr-only">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" onChange={(event) => this.setState({email: event.target.value})} />
          </div>
          <div className="form-group">
            <label className="sr-only">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password" onChange={(event) => this.setState({pw: event.target.value})} />
          </div>

          <button type="submit" className="btn btn-default" onClick={(event) => this.makeUser(event)}><Link to="/sign-in">Fishy time!</Link></button>

        </form>
      </div>
    </div>
    )
  }

}

export default SignUp;
