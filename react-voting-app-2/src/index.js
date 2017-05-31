import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

// registerServiceWorker();

//renders one vote item
class VoteItem extends React.Component {

    addOne = ()=>{
        this.props.voteMe(this.props.voteText)
    }

    render = (props)=>{
        let val = this.props.voteText
        let voteCount = this.props.voteCount
        return (
        <div className="divClass" key={val}>
            <div className="circleClass">{voteCount}</div>
            <p className="pClass"> {val}</p>
            <img className="voteButton" src="./plus.jpg" alt="vote" onClick={this.addOne}/>
        </div>
        )           
    }
}

//renders the voting options 
class VoteComponent extends React.Component {
    state = {
        options : [
            {name: 'React', voteCount: 0}, 
            {name: 'Vue', voteCount: 0},
            {name: 'Angular', voteCount: 0},
            {name: 'Ember', voteCount: 0}
            ]
    }
    addVote = (name) =>{
        //add a vote to the matching name
        this.setState((oldState)=>{
            oldState.options.find(x => x.name === name).voteCount ++
            oldState.options = oldState.options.sort((a, b)=>{
                if (a.voteCount < b.voteCount) return 1
                if (a.voteCount > b.voteCount) return -1
                return 0
            })
        })
   
    }
    render = ()=>{ 

        let {options} = this.state
            options=options.sort((a, b)=>{
            if (a.voteCount < b.voteCount) return 1
            if (a.voteCount > b.voteCount) return -1
            return 0
        })

        const optionElements = options.map((val,i) => {
            return <VoteItem key={val.name} voteText={val.name} voteCount={val.voteCount} voteMe={this.addVote}/>
        });
        return (<div id="options">{optionElements}</div>)
    }
}

ReactDOM.render(
    <div style={{'display': 'inline-block', 'textAlign' : 'center'}}>
        <h1>Vote Your JS Library!</h1>
        <VoteComponent />
    </div>,
    document.getElementById('root'));

