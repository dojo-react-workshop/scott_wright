import React, { Component } from 'react';

//Child Components
import MarkAll from './MarkAll';
import AddNew from './AddNew';
import List from './List';
import FooterButtons from './FooterButtons';

//App Component -- top parent, owns the state
class App extends Component {
  state = {
    items: [
      { id: 1, text: "Learn React", completed: false },
      { id: 2, text: "Build a todo app", completed: true },
      { id: 3, text: "Profit", completed: true }
    ],
    filter: 'all',
    newTodoText: ''
  }


  //control filter value
  setFilter = (filterValue) =>{
      this.setState(
        {filter: filterValue}
      )
  }

  //control completd status
  setStatus = (id) =>{
    const newItems = this.state.items.map((item)=>{
      if(item.id === id)
      return {
        id: id,
        text: item.text,
        completed: (item.completed === false) ? true : false
      }
      return {...item}
    })
    this.setState({items: newItems})
  }

  deleteItem = (id) =>{
    const newItems = this.state.items.filter((item)=>{
      return (item.id!==id)
    })
    this.setState({items: newItems})    
  }

  insertItem = (text) =>{
    const newItems = [...this.state.items]

    //determine the new ID to use-- if no items, it will return id = 1
    const newId = newItems.reduce((max, item)=>{
      if (item.id > max)
        return item.id
      return max
    },0)+1

    newItems.push({
      id: newId,
      text: text,
      completed: false
    })
    this.setState({items: newItems})    
  }

  deleteCompleted = () =>{
    const newItems = this.state.items.filter((item)=>{
      return (item.completed===false)
    })
    this.setState({items: newItems})    
  }

  update = (id, text) =>{
    const newItems = this.state.items.map((item)=>{
      if(item.id === id)
      return {
        id: id,
        text: text,
        completed: item.completed
      }
      return {...item}
    })
    this.setState({items: newItems})
  }

  render = () => {

    //filter the items to send to send to children components
    const filteredItems = this.state.items.filter((item)=>{
      switch (this.state.filter) {
        case 'all':
          return true
        case 'active':
          return (item.completed === false)
        case 'completed':
          return  (item.completed === true)
        default:
          return true
      }
    })

    const completedCount = this.state.items.filter((item)=>{
      return  (item.completed === true)
    }).length
    
    const activeCount = this.state.items.filter((item)=>{
      return  (item.completed === false)
    }).length

    return (
      <div className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <AddNew insertItem={this.insertItem}/>
        </header>
        <section className="main">
          <MarkAll/>
          <List setStatus={this.setStatus} items={filteredItems} deleteItem={this.deleteItem} update={this.update}/>
        </section>
        <FooterButtons completedCount={completedCount} 
                       activeCount={activeCount}
                       totalCount={this.state.items.length}
                       setFilter={this.setFilter}
                       deleteCompleted={this.deleteCompleted}/>
      </div>
    );
  }
}

export default App;