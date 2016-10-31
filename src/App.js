import React, { Component } from 'react';
import './App.css';
import Counter from './Components/Counter';
import User from './Components/User';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <hr />
        <User />
      </div>
    );
  }
}

export default App;
