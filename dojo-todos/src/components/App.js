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

  render() {
    return (
      <div className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <AddNew/>
        </header>
        <section className="main">
          <MarkAll/>
          <List items={this.state.items}/>
        </section>
        <FooterButtons items={this.state.items}/>
      </div>
    );
  }
}

export default App;