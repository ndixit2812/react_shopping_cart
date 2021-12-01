import React,{ createContext, useReducer, useEffect } from 'react';
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

    // increment the item
    const increment =(id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id
        })
    }

    // decrement the item
    const decrement =(id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id
        })
    }

    // use of useEffect to update the data
    useEffect(() => {
        dispatch({
            type: "GET_TOTAL"
        }); 
    }, [state.item]);

    return (
        <cartContext.Provider value={{...state, removeItem, clearCart, increment, decrement }}>
           <ContextCart />
        </cartContext.Provider>
    )
}

export default Cart
