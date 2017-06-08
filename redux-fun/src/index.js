import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'


const myReducer = (oldState={data:0}, action) =>
{
    const newState = {...oldState}
    switch (action.type) {
        case 'add':
            newState.data ++
        break
        case 'sub':
            newState.data --
        break
        default:
    }
    return newState
}


let store = createStore(myReducer)
window.store = store
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
