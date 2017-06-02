import React, { Component } from 'react';

//child components
import ListItem from './ListItem';

//List Component
class List extends Component {
  render=()=> {
    const {items} = this.props
    const listItems = items.map((item)=>{
      return (
        <ListItem
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.completed}
          setStatus={this.props.setStatus}
          deleteItem={this.props.deleteItem}
          update={this.props.update}
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