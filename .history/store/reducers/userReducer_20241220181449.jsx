const initialState = {
    user: null,
    loading: false,
    error: null,
    token: null,
    isAuth: false,
}

export const userReducer = (state = { initialState: [] }, { type, payload }) => {
    switch (type) {
        case "USER": 
            return {...state, user: payload}
        case "TOKEN":
            return {...state, token: payload}
        case "ERROR": 
            return {...state, error: payload}
        default: return state
    }
}