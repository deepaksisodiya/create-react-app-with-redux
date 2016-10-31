/**
 * Created by deepaksisodiya on 31/10/16.
 */


import React, { Component } from 'react';

export default class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter:1,
    }
  }

  onIncrement = () => {
    this.setState({
      counter:this.state.counter + 1,
    });
  };

  onDecrement = () => {
    this.setState({
      counter:this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
      </div>
    );
  }
}