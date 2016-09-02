import React, {Component} from 'react';
import './controlServo.css';
import firebaseHelpers from '../utilities/authHelper';
import {Link} from 'react-router';
import {Checkbox} from 'react-bootstrap';


class controlServo extends Component {

constructor(props){
  super(props);
  this.state = {
    userId: localStorage.getItem("uid"),
    userName: localStorage.getItem("displayName"),
    fishName: localStorage.getItem("fishyName"),
    response: []
  }
}

checkIfUser() {
    if (this.state.userId) {
      firebaseHelpers.checkUser(this.state.userId)
      console.log("YAY! You're in!")
    }
  }

// servoMe(event){
//   servoTime.controlServo(this.state.servoState)
//   .then((response) => {
//   this.setState({servoState: "on"}, {response: this.state.response})
//   // console.log(this.state.response);
// })
// }

componentDidMount() {
  this.checkIfUser(this.state.userId)
  Notification.requestPermission();
  if (Notification.permission !== 'denied' || Notification.permission === "default") {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Feeding time Buddy!");
      }
    });
  }

}

// servoMe(e) {
//   console.info(this.state.servoState)
//   if(this.state.servoState==="off") {
//     axios.post("https:api.particle.io/v1/devices/290017000647343138333038/servoTime?access_token=fba45efff5a9fcadd7b7372de5ee2ebc7d3dff30").then((res) => {
//       console.log(res.data)
//     })
//   }
// }

render() {
  let frameStyle = { width : 0,
                    height : 0,
                    border : 0,
                    display: "none"
  }
  return (
    <div className="controlServo">
      <ul className="nav nav-tabs">
        <li role="presentation" className="landingPage"><Link to="/">|Home|</Link></li>
        <li role="presentation" className="landingPage"><Link to="/giphy-time">|Get Fishies with Giphy|</Link></li>
        <li role="presentation" className="landingPage"><Link to="/deadFish">          |What happens when you don't feed fishy|</Link></li>
      </ul>
      <h1>Hi there {this.state.userName}!</h1>

      <h3>Lets feed {this.state.fishName}!</h3>

      <label>What would you like Alexander to do?</label>
      <iframe name="hiddenFrame" style={frameStyle}></iframe>
      <form action="https:api.particle.io/v1/devices/290017000647343138333038/servoTime?access_token=fba45efff5a9fcadd7b7372de5ee2ebc7d3dff30" method="POST" target="hiddenFrame">
      <br/>
      <Checkbox inline name="args" value="on" />Turn the Servo on.

      <Checkbox inline name="args" value="" />It's cool. You're home.
      <br/>
      <br />
      <button type="submit" className="btn btn-default" value="Do it!">Thanks Alexander!</button>
    </form>
    </div>
  )
}


}

export default controlServo;
