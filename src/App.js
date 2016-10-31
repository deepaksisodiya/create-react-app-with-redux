import React, { Component } from 'react';
import './App.css';
import Counter from './Components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Counter App With Redux</h2>
        <Counter />
      </div>
    );
  }
}

export default App;
