import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'



const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/netflix">Netflix</Link></li>
        <li><Link to="/zillow">Zillow Group</Link></li>
        <li><Link to="/yahoo">Yahoo</Link></li>
        <li><Link to="/modus">Modus Create</Link></li>
      </ul>

      <hr/>
      <Route path="/:thing" component={Thing}/>
      <Route path="/:thing" component={Thing2}/>
    </div>
  </Router>
)

const Thing = (props) => (
    <p>{props.match.params.thing}</p>
)

const Thing2 = (props) => (
    <h2>{props.match.params.thing}</h2>
)


ReactDOM.render(<App />, document.getElementById('root'));
