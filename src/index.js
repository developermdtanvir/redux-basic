import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { store } from './redux/store';

import reportWebVitals from './reportWebVitals';

// STORE -> GLOBALIZE STATE 

//ACTION INCREMENT



// export const increment = () =>{
//   return {
//     type:'INCREMENT'
//   }
// }

// const decrement = () =>{
//   return {
//     type:'DECREMENT'
//   }
// }

// // REDUCER

// const counter = (state = 0, action) => {
//   switch(action.type){
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state -1;
//   }
// }



// // Display it in the console 
// store.subscribe(()=>console.log(store.getState()))


// // DISPATCH
// store.dispatch(increment());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='bg-slate-200'>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
