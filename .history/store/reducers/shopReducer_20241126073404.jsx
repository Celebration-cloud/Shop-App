import {categoryData} from "../../data/categoryData"
import {shopItems} from "../../data/shopData"

const initialState = {
    shopItems: shopItems,
    categories: categoryData,
    cart: [],
}
export const shopReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SHOP_ITEMS": 
            return {...state, shopItems: payload}
        case "CART": 
        default:
            return state
    }
}