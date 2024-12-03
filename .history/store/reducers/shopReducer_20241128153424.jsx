import {categoryData} from "../../data/categoryData"
import {shopItems} from "../../data/shopData"

const initialState = {
    shopItems: shopItems,
    categories: categoryData,
    cartItems: [],
    orderItems: [],
    loading: false,
    error: null,
}
export const shopReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SHOP": 
            return {...state, shopItems: payload}
        case "CART": 
            return {...state, cartItems: payload}
        case "ORDER":
            return {...state, orderItems: [...state.orderItems, ]}
        case "ERROR": 
            return {...state, error: payload}
        case "LOADING": 
            return {...state, loading: payload}
        default:
            return state
    }
}