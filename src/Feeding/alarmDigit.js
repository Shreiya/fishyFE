// import React, { Component } from 'react';
//
// class alarmDigit extends Component {
//   getInitialState(){
//     let val = typeof this.props.val !== "undefined" ? this.props.val : 0;
//     return {value: val, increasing: 0, decreasing: 0, increaseCounter: 0, decreaseCounter: 0};
//   }
//
//   getInterval(counter){
//     if(counter > 5)
//     return 75;
//     else if(counter > 20)
//     return 50;
//     else if(counter > 30)
//     return 5;
//     else
//     return 150;
//   }
//
//   handleCarry(){
//     this.handleIncrease(true);
//   }
//
//   handleBorrow(){
//     this.handleDecrease(true);
//   }
//
//   handleIncrease(once){
//     let state = this.state;
//     state.value ++;
//     state.increaseCounter ++;
//     if (state.value >= this.props.numberSystem)
//     {
//       if (typeof this.props.onCarry === "function")
//           this.props.onCarry();
//           state.vale = 0;
//     }
//       if (once !== true)
//       state.increasing = setTimeout(this.handleIncrease, this.getInterval(this.state.increaseCounter));
//       this.setState(state);
//   }
//
//   handleStartIncrease(){
//     let state = this.state;
//     state.setState(state);
//     this.handleIncrease();
//   }
//
//   handleStopIncrease(){
//     let state = this.state;
//     clearTimeOut(state.increasing);
//     this.setState(state);
//   }
//
//   handleDecrease(){
//     let state = this.state;
//     state.value --;
//     state.decreaseCounter ++;
//     if(state.value < 0)
//     {
//       if (typeof this.props.onBorrow === "function")
//           this.props.onBorrow();
//           state.value = this.props.numberSystem -1;
//     }
//       if (once !== true)
//           state.decreasing = setTimeout(this.handleDecrease, this.getInterval(this.state.decreaseCounter));
//           this.setState(state);
//   }
//
//   handleStartDecrease(){
//     let state = this.state;
//     state.decreasing = true;
//     state.decreaseCounter = 0;
//     this.setState(state);
//     this.handleDecrease();
//   }
//
//   handleStopDecrease(){
//     let state = this.state;
//     clearTimeOut(state.decreasing)
//     this.setState(state);
//   }
//
//   handleChange(event){
//     let value = event.target.value.slice(-2);
//     if(value >= this.props.numberSystem)
//         value = event.target.value.slice(-1);
//     console.log(value);
//     this.setState($.extend(this.state, {value: value}));
//   }
//
//   handleKeyDown(event){
//     if(event.keyCode == 38) {
//       this.handleIncrease(true);
//     }
//     if(event.keyCode == 40) {
//       this.handleDecrease(true);
//     }
//   }
//
//   handleWheel(event){
//     event.preventDefault();
//     if(event.deltaY > 0){
//       this.handleDecrease(true);
//     }
//     if(event.deltaY < 0){
//       this.handleIncrease(true);
//     }
//   }
//
//   render(){
//     let value = props.paddy(this.state.value, 2);
//     return (
//       <div className="alarmDigit alarm-digit">
//         <button className="increase btn btn-default" onMouseDown={(event) => this.handleStartIncrease(event)} onMouseUp={(event)this.handleStopIncrease(event)}></button>
//         <span className="glyphicon glyphicon-menu-up" "aria-hidden":"true"></span>
//         <input className="form-control text-center" type="text" value="value" onChange={(event) => this.handleChange(event)} onKeyDown={(event) => this.handleKeyDown(event)} onWheel={(event) =>this.handleWheel(event)} />
//         <button className="decrease btn btn-defualt" onMouseDown={(event) => this.handleStartDecrease(event)} onMouseUp={(event) => this.handleStopDecrease(event)}></button>
//         <span className="glyphicon glyphicon-menu-down" "aria-hidden":"true"></span>
//       </div>
//     )
//   }
// }
//
// export defualt alarmDigit;
