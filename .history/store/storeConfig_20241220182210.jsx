import { configureStore } from "@reduxjs/toolkit";
import { shopReducer } from "./reducers/shopReducer";
import { shopReducer } from "./reducers/shopReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        shop: shopReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        })
},  applyMiddleware(thunk))

export default store