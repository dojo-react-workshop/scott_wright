import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

class App extends React.Component{
    render=()=>{
        return(
        <div>
            Main App Area
            <Inputs />
            <SearchResults />
        </div>
        )
    }
}

const Inputs=()=>{
    return(
        <div>
            Input Area
        </div>
    )
}

const SearchResults=()=>{
    return(
        <div>
            Search Result Area
            <strong>Name</strong><strong>Price</strong>
            <ResultCategory />
        </div>
    )
}

const ResultCategory=()=>{
    return(
    <div>
        <h4>Cateogry Name</h4>
        <Result />
    </div>
    )
}

const Result=()=>{
    return(
        <div>
            Football $1000
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
