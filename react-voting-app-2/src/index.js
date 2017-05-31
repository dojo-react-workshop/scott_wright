import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

// registerServiceWorker();

//renders one vote item
const VoteItem = (props) => {

    const addOne = ()=>{
        props.voteMe(props.voteText)
    }

    let val = props.voteText
    let voteCount = props.voteCount
    return (
    <div className="divClass" key={val}>
        <div className="circleClass">{voteCount}</div>
        <p className="pClass"> {val}</p>
        <img className="voteButton" src="./plus.jpg" alt="vote" onClick={addOne}/>
    </div>
    )           

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
            const newOptions = oldState.options.map((option) => {
                if (option.name !== name) { return {...option}; }
                return {
                    ...option,
                    voteCount: option.voteCount + 1
                }
            })
            return {
                options: newOptions
            }
        })
   
    }
    render = ()=>{ 
        //initial rendering
        let {options} = this.state
            let sortedOptions = [...options]
            sortedOptions=sortedOptions.sort((a, b)=>{
            if (a.voteCount < b.voteCount) return 1
            if (a.voteCount > b.voteCount) return -1
            return 0
        })

        const optionElements = sortedOptions.map((val,i) => {
            return <VoteItem key={val.name} voteText={val.name} voteCount={val.voteCount} voteMe={this.addVote}/>
        });
        return (
            <div style={{'display': 'inline-block', 'textAlign' : 'center'}}>
                <h1>Vote Your JS Library!</h1>
                <div id="options">{optionElements}</div>
            </div>
        )
    }
}

ReactDOM.render(<VoteComponent/>, document.getElementById('root'));

