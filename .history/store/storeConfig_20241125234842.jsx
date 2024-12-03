import { configureStore } from "@reduxjs/toolkit";


const reduxStore = configureStore({
    reducer: {
        shop: shop,
    },
})

export default reduxStore