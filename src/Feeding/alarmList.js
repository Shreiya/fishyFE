// import React, { Component } from 'react';
//
//  class alarmList extends Component {
// constructor(props){
//   super(props);
//   this.state = {
//     data : this.props.data
//   }
// }
//
// handleEntryClose(index){
//   let state = this.state;
//   state.data.splice(index, 1);
//   this.setState(state);
// }
//
// handleAddEntry(entry){
//   let state = this.state;
//   stat.data.push(entry);
//   this.setState(state);
// }
//
// render(){
//   let alarmNodes = this.state.data.map(function(alarm, i){
//     if(alarm === undefined) return undefined;
//     return (
//       React.createElement(AlarmEntry, {time: alarm.time, comment: alarm.comment, onClose: this.handleEntryClose.bind(this, i), key: i, onRing: this.props.onRing})
//             );
//         }.bind(this));
//
//       let list(){
//         if (this.state.data.length == 0) {
//           return (React.createElement("li", {className: "list-group-item"}, "None"));
//         }
//         else {
//           return alarmNodes;
//         }
//       }.bind(this);
//
//       return (
//                 React.createElement("ul", {className: "alarmList list-group"},
//                     list()
//                 )
//             );
//         }
//     }
//
//     export default alarmList;
