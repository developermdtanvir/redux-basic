import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";

const initialState = {
    cart:[],
    products:[
        {name:"Lenevo Laptop",id:1},
        {name:"DELL Laptop",id:2},
        {name:"ASUS Laptop",id:3},
        {name:"HP Laptop",id:4},
        {name:"Toshiba Laptop",id:5},
    ]
}

const CartReducer = (state = initialState,action) =>{

    switch(action.type){
        case ADD_TO_CART:
            return state;
        case REMOVE_FROM_CART:
            return state ;
        default:
            return state;
    }
}

export default CartReducer;