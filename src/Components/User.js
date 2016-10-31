/**
 * Created by deepaksisodiya on 31/10/16.
 */


import React, {Component} from 'react';
import {connect} from 'react-redux';

class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:'',
      age:'',
    }
  }

  changeName = () => {
    this.props.setName(this.state.name);
  };

  changeAge = () => {
    this.props.setAge(this.state.age);
  };

  handleChange = (key, event) => {
    this.setState({
      [key]: event.target.value,
    });
  };

  render() {
    return(
      <div>
        <div>{this.props.name} is {this.props.age} years old</div>
        <div>
          <input type="text" onChange={(e) => this.handleChange('name', e)}/>
          <button onClick={this.changeName}>Change Name</button>
        </div>
        <div>
          <input type="text" onChange={(e) => this.handleChange('age', e)}/>
          <button onClick={this.changeAge}>Change Age</button>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    name:state.UserReducer.name,
    age:state.UserReducer.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: 'SET_NAME',
        payload:{
          name,
        }
      });
    },
    setAge: (age) => {
      dispatch({
        type: 'SET_AGE',
        payload:{
          age,
        }
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);