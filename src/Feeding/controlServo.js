import React, {Component} from 'react';

import firebaseHelpers from '../utilities/authHelper';


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
    <div>
      <h1>Hi there {this.state.userName}!</h1>
      <h3>Lets feed {this.state.fishName}!</h3>
      <label>What would you like alex to do?</label>
      <iframe name="hiddenFrame" style={frameStyle}></iframe>
      <form action="https:api.particle.io/v1/devices/290017000647343138333038/servoTime?access_token=fba45efff5a9fcadd7b7372de5ee2ebc7d3dff30" method="POST" target="hiddenFrame">
      <br/>
      <input type="radio" name="args" value="on" />Turn the Servo on.
      <br/>
      <input type="radio" name="args" value="off" />Turn the Servo off.
      <br/>
      <input type="submit" value="Do it!" />
    </form>
    </div>
  )
}


}

export default controlServo;
