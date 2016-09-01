import React, {Component} from 'react';
import fishyGiphy from '../utilities/helpers';

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
    event.preventDefault()
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
      <div>
        <button onClick={(event) => this.handleClick(event, result)}>View All!</button>
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
