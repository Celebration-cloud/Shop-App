import { configureStore } from "@reduxjs/toolkit";
import { shopReducer } from "./reducers/shopReducer";


const reduxStore = configureStore({
    reducer: {
        shop: shopReducer,
    },
    e
})

export default reduxStore