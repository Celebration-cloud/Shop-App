const initialState = {
    user: null,
    loading: false,
    error: null,
    token: null,
    isAuth: false,
}

export const todoReducer = (state = { initialState: [] }, { type, payload }) => {
    switch (type) {
        case "USER": 
            return {...state, user: payload}
        case "TOKEN":
            return {...state, token: payload}
        case "error": 
            return
        default: return state
    }
}