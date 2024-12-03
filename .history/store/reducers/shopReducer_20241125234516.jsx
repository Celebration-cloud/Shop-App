import {categoryData} from "../../data/categoryData"
import {shopData} from "../../data/c"

const initialState = {
    shopItems: [],
    categories: categoryData
}
export const todoReducer = (state = { initialState: [] }, { type, payload }) => {
    switch (type) {
        case initialState: return {}
        default: return state
    }
}