import {categoryData} from "../../data/categoryData"
import {shopItems} from "../../data/shopData"

const initialState = {
    shopItems: shopItems,
    categories: categoryData,
    cartItems: [],
    orders: [],
    loading: false,
    error: null,
}
export const shopReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SHOP_ITEMS": 
            return {...state, shopItems: payload}
        case "CART": 
            return {...state, cartItems: payload}
        case "O"
        case "ERROR": 
            return {...state, error: payload}
        case "LOADING": 
            return {...state, loading: payload}
        default:
            return state
    }
}