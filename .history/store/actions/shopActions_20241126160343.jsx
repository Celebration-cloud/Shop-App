import { useEffect } from "react"

const wait = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms))
// useEffect(() => {
//     const result = async () => {
//         await wait(ms)
//     }
//     window.addEventListener("change", result)
//     return () => {
//         window.removeEventListener("change", result)
//     }
// }, []);
console.log(wait)
export const addToCart = (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: "LOADING", payload: true})
        await wait(2000)
        console
        dispatch({ type: "CART", payload: userData })
        dispatch({ type: "ERROR", payload: null });
        dispatch({ type: "LOADING", payload: false });
    } catch (error) {
         dispatch({ type: "ERROR", payload: error.message })
         dispatch({ type: "LOADING", payload: false });
    }finally{
        dispatch({ type: "LOADING", payload: false });
    }
}