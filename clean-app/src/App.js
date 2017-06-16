import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    max: null,
    min: null,
    total: 0,
    count: 0,
    input: '',
    mode: null,
    everything: []
  }

  handleChange=(e)=>{
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit=(e)=>
  {
    e.preventDefault()

  }

  handleClick=()=>{
    let {max, min, total, count, mode, everything} = this.state
    let input = Number(this.state.input)

    if (max===null)
      max = input
    if (min===null)
      min = input
    if (mode===null)
      mode = input

    //check for new max
    if (input > max)
      max = input
    //check for new min
    if (input < min)
      min = input


    //check for new mode
    if (everything[input] === undefined)
      everything[input]=1
    else
      everything[input]++

    //is it a new mode
    if (everything[input] > everything[mode])
      mode = input

    
    total += input
    count ++


    this.setState({
      max,
      min,
      total,
      count,
      mode,
      everything : [...everything],
      input: ''
    })


  }

  render() {
    return (
      <div className="App">
        <h1>Number Cruncher</h1>
        <h4>New Number (must be integer between 0 and 100)</h4>
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.input }onChange={this.handleChange} />
        <button onClick={this.handleClick} disabled={   
                (Number(this.state.input) >=0 && Number(this.state.input) <=100 && this.state.input !== '') ? false : true }>Add</button>
        </form>
        <table>
          <thead>
            <tr>
            <td>Max</td>
            <td>Min</td>
            <td>Mean</td>
            <td>Mode</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.max}</td>
              <td>{this.state.min}</td>
              <td id="mean">{(this.state.total/this.state.count).toFixed(2)}</td>
              <td>{this.state.mode}</td>              
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
