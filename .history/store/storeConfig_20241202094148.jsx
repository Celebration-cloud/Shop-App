import { configureStore } from "@reduxjs/toolkit";
import { shopReducer } from "./reducers/shopReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        shop: shopReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            
        })
},  applyMiddleware(thunk))

export default store