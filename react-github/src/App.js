import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

//child components
import Input from './Input'
import UserList from './UserList'

class App extends Component {

  //initial state - search repo name is blank
  state = {
    repoName : ''
  }

  //allow the repo name to get updated
  setSearch=(key)=> {
    this.setState({repoName : key})
  }

  render() {
    return(
      <Router>
      <div>
        <Input repoName={this.state.repoName}
               setSearch={this.setSearch} />
        <hr />
        <Route path="/search/:repo" component={UserList}/>
      </div>
      </Router>
    )
  }
}

export default App;




//  render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }