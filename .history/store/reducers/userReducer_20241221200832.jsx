const initialState = {
    user: null,
    token: null,
    isAuth: false,
    to
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "USER":
        return { ...state, user: payload };
      case "TOKEN":
        return { ...state, token: payload };
      case "AUTH":
        return { ...state, isAuth: payload };
      default:
        return state;
    }
}