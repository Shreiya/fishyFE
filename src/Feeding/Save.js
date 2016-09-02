import React, { Component } from 'react';
import fishyGiphy from '../utilities/helpers';

class Save extends Component{
  constructor(props){
    super();
  }

  handleClick(event){
    event.preventDefault()
    console.log("clicked");
    const data = {
      img: this.props.giphy.data.fixed_height_downsampled_url,
      id: this.props.giphy.id,
      status: "Deleted"
    }
    fishyGiphy.saveThis(data).then((res) => {

    })
  }

  render(){
    return(
      <div>
        <button type="submit" className="btn btn-default" onClick={(event) => this.handleClick(event)}>Save me</button>
      </div>
    )
  }
}

export default Save;
