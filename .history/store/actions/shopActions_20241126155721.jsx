import { useEffect } from "react"

const wait = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms))
useEffect(() => {
    const result = async () => {
        await wait(ms)
    }
    window.addEventListener("change", result)
    return () => {
        window.removeEventListener("change", result)
    }
}, []);
console.log(wait)
export const addToCart = (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: "LOADING", payload: true})
        await
        dispatch({ type: "CART", payload: data })
    } catch (error) {
         dispatch({ type: "ERROR", payload: error.message })
    }
}