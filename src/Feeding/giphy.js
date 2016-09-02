import React, { Component } from 'react';
import fishyGiphy from '../utilities/helpers';
import Save from './Save';
import { Link} from 'react-router';
import './giphy.css';


class giphy extends Component {
  constructor(props){
    super(props);
    this.state = {
      response : [],
      imgUrl : ""
    }
  }

  getGiphy(event){
    fishyGiphy.showRandom()
    .then((response) => {
      this.setState({response: response.data, imgURL: response.data.data.fixed_height_downsampled_url})
      // console.log(response.data.fixed_height_downsampled_height)
      // console.log(response.data)
      // {imgURL : response.data.data.fixed_height_downsampled_url}
      console.log(response.data.data.fixed_height_downsampled_url)
      console.log(this.state.response.data.id);
    })
  }

  render(){
    return(
      <div className="giphy">
        <ul className="nav nav-tabs">
          <li role="presentation" className="landingPage"><Link to="/">|Home|</Link></li>
          <li role="presentation" className="landingPage"><Link to="/sign-up">|Sign Up|</Link></li>
          <li role="presentation" className="landingPage"><Link to="/sign-in">|Sign In|</Link></li>
          <li role="presentation" className="landingPage"><Link to="/about">|About|</Link></li>
            <li role="presentation" className="landingPage"><Link to="/deadFish">|What happens when you don't feed fishy|</Link></li>
        </ul>
        <br></br>
        <button type="submit" className="btn btn-default" onClick={(event) => this.getGiphy(event)}>GET ME MY FISHY!</button>
          <br></br>
        <img alt="" src={this.state.imgURL}></img>
          <br></br>
        <Save giphy={this.state.response} />
          <br></br>
        <button type="submit" className="btn btn-default"><Link to="/viewSaved">See Saved!</Link></button>

      </div>
    )
  }
}



export default giphy;
