import React,{ createContext, useReducer } from 'react';
import "./Cart.css";
import { products } from "./Products";
import ContextCart from './ContextCart';
import { reducer } from './Reducer';

 export const cartContext = createContext();

 const initialState = {
     item: products,
     totalAmount: 0,
     totalItem: 0
 };
 
const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // to delete the item from the cart div
    const removeItem = (id) => {
        return dispatch({
            type:"REMOVE_ITEM",
            payload: id
        })
    }
    // cart clear
    const clearCart = () => {
        return dispatch({type:"CLEAR_CART"})
    }

    return (
        <cartContext.Provider value={{...state, removeItem, clearCart}}>
           <ContextCart />
        </cartContext.Provider>
    )
}

export default Cart
