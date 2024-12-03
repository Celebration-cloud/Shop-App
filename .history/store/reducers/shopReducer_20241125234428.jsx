import {cat}

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