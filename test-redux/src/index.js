import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { store } from './store';
// import {composeWithDevTools} from 'redux-devtools-extension';

// const defaultState = {
//   cash: 5,
// }

//action = {type: '', payload: '?'}

// const cashReducer = (state = defaultState , action ) => {
//  switch (action.type) {
//    case "ADD_CASH":
//     return {...state, cash: state.cash + action.payload};
//    case "GET_CASH":
//     return {...state, cash: state.cash - action.payload};
//   default:
//    return state;
//  }
 
// }

// const userReducer = (state = defaultState , action) => {
//   switch (action.type) {
//     case "ADD_CASH":
//      return {...state, cash: state.cash + action.payload};
//     case "GET_CASH":
//      return {...state, cash: state.cash - action.payload};
//    default:
//     return state;
//   }
// }

// const store = createStore(cashReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  
  </React.StrictMode>
);


