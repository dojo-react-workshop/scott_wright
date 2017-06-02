import React, { Component } from 'react';

class AddNew extends Component {

  handleKeyPress= (event)=>{
    if (event.key === 'Enter'){
      if(event.target.value)
        this.props.insertItem(event.target.value)
        event.target.value=""
    }
  }
  render() {
    return (
      <input className="new-todo" 
             type="text" 
             placeholder="What needs to be done?"
             onKeyPress={this.handleKeyPress}/>
    );
  }
}

export default AddNew;