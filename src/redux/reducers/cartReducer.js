import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionType";

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


const cartReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_TO_CART:
            const newItem = {
                productId:action.id,
                name:action.name,
                cartId : state.cart.length +1
            }
            const newCartTem = [...state.cart,newItem]
            return {
                ...state,
                cart:newCartTem,
            }
        case REMOVE_FROM_CART:
            const {id} = action;
            const newCart = state.cart.filter(item => item.cartId !== id);
            return {
                ...state,
                cart : newCart,
             
            }
        default:
            return state;
    }
}

export default cartReducer;