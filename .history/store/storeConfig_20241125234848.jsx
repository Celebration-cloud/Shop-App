import { configureStore } from "@reduxjs/toolkit";


const reduxStore = configureStore({
    reducer: {
        shop: shopRe,
    },
})

export default reduxStore