import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        name: 'Hank'
    }

    changeName = () => {
        (this.state.name === 'Hank') ? this.setState({name : 'Dan'}) : this.setState({name : 'Hank'})
    }
    render(){
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName}>Change name</button>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

