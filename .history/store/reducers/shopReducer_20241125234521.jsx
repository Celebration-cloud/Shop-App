import {categoryData} from "../../data/categoryData"
import {shop} from "../../data/c"

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