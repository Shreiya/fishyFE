// import React, { Component } from 'react';
//
// class bell extends Component {
//   getInitialState: function(){
//           return this.props.bells[0];
//       }
//
//   ring() {
//     this.refs.audio.getDomNode().load();
//     this.refs.audio.getDomNode().play();
//   }
//
//   handleChange(event){
//     let state = this.state;
//     let key = event.target.value;
//     state = this.props.bells[key];
//     this.setState(state);
//   }
//
//   handlePlay(){
//     this.refs.audio.getDomNode().load();
//     this.refs.audio.getDomNode().play();
//   }
//
//   handleStop(){
//     this.refs.audio.getDomNode().pause();
//   }
//
//   render(){
//     let options = this.props.bells.map(function(bell, i){
//       return(
//         React.createElement("option", value: i, key: i), bell.path)
//       );
//     });
//     return(
//       <div className="bell">
//         <audio ref="audio" loop="true"></audio>
//       <div className="form-inline">
//         <select className="form-control" onChange={(event) => this.handleChange(event)} options></select>
//       </div>
//       <button className="btn btn-default" onClick={(event) => this.handlePlay(event)}>Preview</button>
//       <button className="btn btn-danger" onClick={(event) => this.handleStop(event)}>Stop</button>
//       </div>
//     )
//   }
//
//
// }
//
// export default bell;
