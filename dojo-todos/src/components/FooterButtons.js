import React, { Component } from 'react';

class FooterButtons extends Component {
  constructor(){
    super()
  }
  render() {
    const {items} = this.props
    let countText =  (items.length > 1) ? `${items.length} items left` : `${items.length} item left`
    if (items.length == 0) countText = "Create a todo item!"
    const listItems = []
    const buttons = []
    //at least one item to show
    if (items.length)
        listItems.push(<li key="all" className="info"><button>All</button></li>)

    //at least one active item to show
    if (items.filter((item) => {return item.completed == false}).length)
        listItems.push(<li key="active" className="info"><button>Active</button></li>)
   
    //at least one completed item to show
    if (items.filter((item) => {return item.completed == true}).length) {
        listItems.push(<li key="completed" className="info"><button>Completed</button></li>)
        buttons.push(<button className="clear-completed">Clear All Completed</button>)  
    }
    
    
    return (
        <footer className="footer">
            <span className="todo-count">{countText}</span>
            <ul className="filters">
                {listItems}
            </ul>       
            {buttons}
        </footer>
    );
  }
}

export default FooterButtons;