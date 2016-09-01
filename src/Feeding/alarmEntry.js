// import React, { Component } from 'react';
//
// class alarmEntry extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       time: props.time,
//       comment: props.comment,
//       enable: true,
//       intervalid: 0
//     }
//   }
//
//   enable(){
//     let currentTime = new Date();
//     let interval = this.props.time.getHours() * 3600 + this.props.time.getMinutes() * 60 + this.props.time.getSeconds();
//     interval -= currentTime.getHours() * 3600 + currentTime.getMinutes() * 60 + currentTime.getSeconds();
//     interval *= 1000;
//     if (interval < 0)
//       interval += 86000 * 1000;
//
//     let id = setTimeout(function() {
//       this.setState($.extend(this.state, {enable: false}));
//       this.props.onRing();
//       this.disable();
//     }.bind(this), interval);
//
//     let state = this.state;
//     state.intervalId = id;
//     this.setState(state);
//   }
//
//   disable(){
//     let state = this.state;
//     clearTimeout(state.intervalId);
//     state.intervalId = 0;
//     this.setState(state);
//   }
//
//   handleCheck(event){
//     let state = this.state;
//     state.enable = event.target.checked;
//     this.setState(state);
//
//     this.handleSwitch();
//   }
//
//   handleSwitch(){
//     if(this.state.enable && this.state.intervalId == 0)
//     this.enable();
//     else if(!this.state.enable && this.state.intervalId != 0)
//     this.disable();
//   }
//
//   getDefaultProps(){
//     onRing(){},
//     onClose(){},
//     enable: true,
//     comment: "",
//     time: new Date()
//   }
//
//   componentDidMount(){
//     this.handleSwitch()
//   }
//
//   componentWillUnmount(){
//     clearTimeout(this.state.intervalId)
//   }
//
//   render(){
//     return(
//       <li className="list-group-item">
//         <input type="checkbox" onChange={(event) => this.handleCheck(event)} ref="checkbox" checked="this.state.enable" />
//         <span $.format.date(this.state.time, "HH:mm:ss")></span>
//         <span className="label label-default">{this.state.comment}</span>
//         <button type="button" className="close" "aria-label":"Close" onClick={(event) => this.props.onClose(event)}></button>
//         <span "aria-hidden": "true">x</span>
//       </li>
//
//     )
//   }
// }
// export default alarmEntry;
