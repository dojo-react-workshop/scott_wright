import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class App extends React.Component{
    render=(props)=>{
        return(
        <div className="App">
            <Inputs />
            <SearchResults products={this.props.products}/>
        </div>
        )
    }
}

const Inputs=()=>{
    return(
        <div className="Inputs">
            <input type="text" name="searchBox" placeholder="search" />
            <br/>
            <input type="checkbox" name="stockFilter" />
            Only show products in stock
        </div>
    )
}

const SearchResults=()=>{
    return(
        <div className="SearchResults">
            <h3>Name</h3><h3>Price</h3>
            <br/>
            <ResultCategory />
        </div>
    )
}

const ResultCategory=(props)=>{
    return(
    <div className="ResultCategory">
        <h4>props.</h4>
        <Result />
    </div>
    )
}

const Result=()=>{
    return(
        <div className="Result">
            <span>Football</span><span>$1000</span>
        </div>
    )
}

ReactDOM.render(<App products={PRODUCTS}/>, document.getElementById('root'));
// registerServiceWorker();
