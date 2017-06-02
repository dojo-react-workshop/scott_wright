import React, { Component } from 'react';

class AddNew extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <input className="new-todo" type="text" placeholder="What needs to be done?"/>
    );
  }
}

export default AddNew;