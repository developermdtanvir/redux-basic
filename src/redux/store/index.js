import axios from "axios";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import CartReducer from "../reducers";





export const loadData = () => {
  return async (dispatch) => {
    try {
      // Dispatch an action to indicate that the data is being loaded
      dispatch({ type: 'LOADING_DATA' });

      // Make an API call to retrieve the data
      const response = await axios.get('https://dummyjson.com/products');

      // Dispatch an action to update the store with the retrieved data
      dispatch({ type: 'LOAD_DATA_SUCCESS', payload: response.data });
    } catch (error) {
      // Dispatch an action to indicate that an error occurred while loading the data
      dispatch({ type: 'LOAD_DATA_FAILURE', payload: error.message });
    }
  };
};



export const store = createStore(CartReducer,applyMiddleware(thunk));

store.dispatch(loadData())

