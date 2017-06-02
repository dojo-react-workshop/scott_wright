import React, { Component } from 'react';

//ListItem component
class ListItem extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <li className="view">
        <input className="toggle" type = "checkbox" checked={this.props.completed}/>
        <label>{this.props.text}</label>
        <button className="destroy"/>
      </li>
    );
  }
}

export default ListItem;