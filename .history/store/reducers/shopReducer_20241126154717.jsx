import {categoryData} from "../../data/categoryData"
import {shopItems} from "../../data/shopData"

const initialState = {
    shopItems: shopItems,
    categories: categoryData,
    cartItems: [],
    loading: false,
    error: null,
}
export const shopReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SHOP_ITEMS": 
            return {...state, shopItems: payload}
        case "CART": 
            return {...state, cartItems: payload}
        case "CART": 
            return {...state, cartItems: payload}
        case "CART": 
            return {...state, cartItems: payload}
        default:
            return state
    }
}