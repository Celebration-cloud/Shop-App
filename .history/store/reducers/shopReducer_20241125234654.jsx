import {categoryData} from "../../data/categoryData"
import {shopItems} from "../../data/shopData"

const initialState = {
    shopItems: shopItems,
    categories: categoryData
}
export const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SHOP_ITEMS": 
            return {...state, }
        default: return state
    }
}