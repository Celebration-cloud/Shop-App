const initialState = {
    user: null,
    loading: false,
    
}

export const todoReducer = (state = { initialState: [] }, { type, payload }) => {
    switch (type) {
        case initialState: return {}
        default: return state
    }
}