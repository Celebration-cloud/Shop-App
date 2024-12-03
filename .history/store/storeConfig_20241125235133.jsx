import { configureStore } from "@reduxjs/toolkit";
import { shopReducer } from "./reducers/shopReducer";
import { applyMiddleware } from "redux";

const reduxStore = configureStore({
    reducer: {
        shop: shopReducer,
    },
},  composeWithDevTools(applyMiddleware(thunk)))

export default reduxStore

