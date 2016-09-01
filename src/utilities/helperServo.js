import axios from 'axios';



const servoTime = {
  controlServo : function(){
    return axios.post("https:api.particle.io/v1/devices/290017000647343138333038/servoTime?access_token=fba45efff5a9fcadd7b7372de5ee2ebc7d3dff30");
  }
}


export default servoTime;
