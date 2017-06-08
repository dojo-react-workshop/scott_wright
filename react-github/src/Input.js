import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Link, withRouter} from 'react-router-dom'
class Input extends Component 
{
    constructor(props) {
        super(props)
    }

    handleSubmit=(event)=>{
        //block the page reload
        event.preventDefault()
       
        //navigate to the search route
        this.props.history.push(`/search/${this.props.repoName}`)
    }

    setSearch=(event)=>{
        this.props.setSearch(event.target.value)
    }

    render() {
        return ( 
            <form style={{textAlign : 'center'}}
                onSubmit={this.handleSubmit}>
                <h1>List users of a github repository</h1>
                Search: <input 
                            style={{width : '15em'}}
                            type="text" placeholder="Enter github.com repo name" 
                            value={this.props.repoName} 
                            onChange={this.setSearch} />
                <br />
                <input 
                    style={{margin: '10px 0px 0px 15em'}}
                    type="submit"
                    disabled={!(this.props.repoName.length > 0)} />
            </form> 
            )
        }
}

export default withRouter(Input);