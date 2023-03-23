import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionType"

export const addToCart =  (id,name) => {
    return {
        type:ADD_TO_CART,
        id,
        name
    }
}

export const removeFromCart = id => {
    return {
        type : REMOVE_FROM_CART,
        id
    }
}