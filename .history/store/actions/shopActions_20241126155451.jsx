import { useEffect } from "react"

const wait = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms))
useEffect(() => {
    const result = () => {
        wait(ms)
    }
    window.addEventListener("change", result)
    return () => {
        window.removeEventListener("change", result)
    }
}, []);
console.log
export const addToCart = (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: "LOADING", })
        const { data } = await axios.post(URL, userData)
        dispatch({ type: "CART", payload: data })
    } catch (error) {
         dispatch({ type: "ERROR", payload: error.message })
    }
}