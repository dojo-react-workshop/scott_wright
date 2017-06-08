import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

export const addActionCreator = () => {
  return {
    type: 'add'
  }
}
export const subActionCreator = () => {
  return {
    type: 'sub'
  }
}


const mapStateToProps = (state) => {
  return {
    count: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(addActionCreator())
    },
    onSub : () => {
      dispatch(subActionCreator())
    }
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>Add</button>
        <button onClick={this.props.onSub}>Sub</button>
        <p>Value is {this.props.count}</p>
      </div>
    );
  }
}
App = connect(mapStateToProps,mapDispatchToProps)(App)
export default App;
