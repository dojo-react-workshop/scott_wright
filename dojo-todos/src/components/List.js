import React, { Component } from 'react';

//child components
import ListItem from './ListItem';

//List Component
class List extends Component {
  constructor(){
    super()
  }
  render() {
    const {items} = this.props
    const listItems = items.map((item)=>{
      return (
        <ListItem
          key={item.id}
          text={item.text}
          completed={item.completed}
        />
      )
    })
    return (
        <ul className="todo-list">
          {listItems}
        </ul>
    );
  }
}

export default List;