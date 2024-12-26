const initialState = {
    user: null,
    loading: false,
    error: null,
    token: null,
    isAuth: false,
}

export const todoReducer = (state = { initialState: [] }, { type, payload }) => {
    switch (type) {
        case "initialState": return {}
        default: return state
    }
}