import React, {Component} from 'react';
import fishyGiphy from '../utilities/helpers';
import './giphy.css';
import {Link} from 'react-router';
class viewSaved extends Component {

  constructor(props){
    super();
    this.state = {
      response: [],
      id: "",
      object: "",
      status: []
    }
  }

  handleClick(event){
    console.log("click");


  fishyGiphy.viewAll()
  .then((res) => {
    this.setState({response: res})
  })
}

  handleDelete(event, index, result){
    console.log(this.state.response);
    event.preventDefault();
    console.log(index);
    const id = []
    for (let ids in result){
      id.push(ids)
    }
    console.log(id)
    const obj = id[index]
    this.setState({id: id[index]})
    this.setState({onject: result[obj]})
    this.setState({status: "Deleted"})

    fishyGiphy.delete(obj)
    .then((res) => {
      console.log("deleted", res)
    })
  }

    componentDidMount(){
      this.handleClick();
    }

  render(){
    const urls = []
    const keys = []
    const obj = []
    const result = this.state.response
    for (let url in result){
        keys.push(url)
        urls.push(result[url].img)
        obj.push(result[url])
    }
    return(
      <div className="giphy">
        <ul className="nav nav-tabs">
          <li role="presentation" className="landingPage"><Link to="/">|Home|</Link></li>
          <li role="presentation" className="landingPage"><Link to="/sign-up">|Sign Up|</Link></li>
          <li role="presentation" className="landingPage"><Link to="/sign-in">|Sign In|</Link></li>
          <li role="presentation" className="landingPage"><Link to="/about">|About|</Link></li>
            <li role="presentation" className="landingPage"><Link to="/deadFish">|What happens when you don't feed fishy|</Link></li>
        </ul>
        <div>
          {
            obj.map((res, index) => {
              return (

                  <img key={index} onDoubleClick={(event) => this.handleDelete(event, index, result)} alt="" src={res.img}/>

              )
            })
          }
          </div>
          </div>
    )
  }
}

export default viewSaved;
