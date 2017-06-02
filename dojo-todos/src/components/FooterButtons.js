import React, { Component } from 'react';

class FooterButtons extends Component {
  render=() => {
    let countText =  (this.props.totalCount > 1) ? `${this.props.totalCount} items left` : `${this.props.totalCount} item left`
    if (this.props.totalCount === 0) countText = "Create a todo item!"
    const listItems = []
    const buttons = []
    
    if (this.props.totalCount){
        listItems.push(<li key="all" className="info"><button onClick={()=>this.props.setFilter("all")}>All</button></li>)
    }
    //at least one active item to show
    if (this.props.activeCount)
        listItems.push(<li key="active" className="info"><button onClick={()=>this.props.setFilter("active")}>Active</button></li>)
   
    //at least one completed item to show
    if (this.props.completedCount) {
        listItems.push(<li key="completed" className="info"><button onClick={()=>this.props.setFilter("completed")}>Completed</button></li>)
        buttons.push(<button key="clear" className="clear-completed" onClick={()=>this.props.deleteCompleted()}>Clear All Completed</button>)  
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