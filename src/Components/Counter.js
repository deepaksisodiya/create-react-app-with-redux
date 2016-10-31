/**
 * Created by deepaksisodiya on 31/10/16.
 */


import React, { Component } from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div>
        <div>{this.props.counter}</div>
        <button onClick={() => this.props.onIncrement()}>Increment</button>
        <button onClick={() => this.props.onDecrement()}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.CounterReducer.counter,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch({
        type:'INCREMENT'
      });
    },
    onDecrement: () => {
      dispatch({
        type:'DECREMENT'
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);