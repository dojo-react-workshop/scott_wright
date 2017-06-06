import React, { Component } from 'react';

//ListItem component
class ListItem extends Component {
  state = {
    editMode: false,
  }

  editToggle = ()=>{
    this.setState({editMode: this.state.editMode === false ? true : false})
  }

  handleKeyPress= (event)=>{
    if (event.key === 'Enter'){
      if(event.target.value){
          this.props.update(this.props.id, event.target.value)
          this.editToggle()
      }
    }
  }

  handleBlur=(event)=>{
       if(event.target.value){
          this.props.update(this.props.id, event.target.value)
          this.editToggle()
      }
      else
        return false
}

  render = ()=> {
    if (this.state.editMode ===false)
        return (
          <li className="view">
            <input className="toggle" 
                  type = "checkbox"
                  checked={this.props.completed} 
                  onClick={()=>{this.props.setStatus(this.props.id)}} />
            <label onDoubleClick={()=>this.editToggle()}>{this.props.text}</label>
            <button className="destroy"
                    onClick={()=>{this.props.deleteItem(this.props.id)}} />
          </li>
        );
    else {
        return (
          <li className="view">
            <input className="toggle" 
                  type = "checkbox"
                  checked={this.props.completed} 
                  onClick={()=>{this.props.setStatus(this.props.id)}} />
            <input className="new-todo" 
                  type="text" defaultValue={this.props.text} 
                  onKeyPress={this.handleKeyPress} 
                  onBlur={this.handleBlur}/>
            <button className="destroy"
                    onClick={()=>{this.props.deleteItem(this.props.id)}} />
          </li>
        );
    }
  }
}

export default ListItem;