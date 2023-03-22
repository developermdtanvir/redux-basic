import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

// STORE -> GLOBALIZE STATE 

//ACTION INCRIMENT

export const incriment = () =>{
  return {
    type:'INCRIMENT'
  }
}

const decriment = () =>{
  return {
    type:'DECRIMENT'
  }
}

// REDUCER

const counter = (state = 0, action) => {
  switch(action.type){
    case 'INCRIMENT':
      return state + 1;
    case 'decriment':
      return state -1;
  }
}

let store = createStore(counter);

// Display it in the console 
store.subscribe(()=>console.log(store.getState()))


// DISPATCH
store.dispatch(incriment());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
