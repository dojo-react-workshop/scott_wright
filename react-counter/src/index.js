import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

//counter component
class CounterComponent extends React.Component {

    state = {
        counter : 0
    }

    //functions to handle clicks
   incrementClick = () => this.setState({counter : this.state.counter + 1})
   decrementClick = () => this.setState({counter : this.state.counter - 1})


    render = () =>{
        let divStyle = {
            'width' : '300px',
            'height' : '100px',
            'border' : 'thin solid black',
            'display' : 'block',
            'text-align' : 'center'
        }
         return (
             <div style={divStyle}>
                 <h1>{this.state.counter}</h1>
                 <button onClick={this.incrementClick}>increment</button>
                 <button onClick={this.decrementClick}>decrement</button>
             </div>
         )
    }
}

class AllCounters extends React.Component {

    state = {
        counterCount : 1
    }

    //functions to handle clicks
   newClick = () => this.setState({counterCount : this.state.counterCount + 1})

    render = () =>{
        let counters = []
        for (let i = 0; i< this.state.counterCount; i++)
            counters.push(<CounterComponent key={i}/>)
         return (
             <div>
                 <h1>You have {this.state.counterCount} Counters!</h1>
                 <button onClick={this.newClick}>Add A Counter</button>
                 {counters}
             </div>
         )
    }
}

ReactDOM.render(<AllCounters />, document.getElementById('root'));
// registerServiceWorker();
