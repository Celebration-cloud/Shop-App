import { configureStore } from "@reduxjs/toolkit";


const reduxStore = configureStore({
    reducer: {
        key: key,
    },
    app
})

export default reduxStore