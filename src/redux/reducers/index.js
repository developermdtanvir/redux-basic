import { ADD_TO_CART, LOADING_DATA, LOAD_DATA_FAILURE, LOAD_DATA_SUCCESS, REMOVE_FROM_CART } from "../actions/actionTypes";

const initialState = {
    cart:[],
    loading:false,
    data:[],
    error:null
}

const CartReducer = (state = initialState,action) =>{

    switch(action.type){
        case LOADING_DATA:
            return { ...state, loading: true };
          case LOAD_DATA_SUCCESS:
            return { ...state, loading: false, data: action.payload };
          case LOAD_DATA_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case ADD_TO_CART:
            return state;
        case REMOVE_FROM_CART:
            return state ;
        default:
            return state;
    }
}

export default CartReducer;