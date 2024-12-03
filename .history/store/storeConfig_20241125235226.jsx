import { configureStore } from "@reduxjs/toolkit";
import { shopReducer } from "./reducers/shopReducer";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reduxStore = configureStore({
    reducer: {
        shop: shopReducer,
    },
},  composeWithDevTools(applyMiddleware(thunk)))

export default reduxStore