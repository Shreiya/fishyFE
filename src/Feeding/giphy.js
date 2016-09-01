import React, { Component } from 'react';
import fishyGiphy from '../utilities/helpers';
import Save from './Save';
import { Link} from 'react-router';


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
      <div>
        <button onClick={(event) => this.getGiphy(event)}>GET ME MY FISHY!</button>
        <img alt="" src={this.state.imgURL}></img>
        <Save giphy={this.state.response} />
        <button><Link to="/viewSaved">See Saved!</Link></button>

      </div>
    )
  }
}



export default giphy;
