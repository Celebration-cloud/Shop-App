import { useEffect } from "react"

const wait = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms))

export const addToCart = (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: "LOADING", payload: true})
        await wait(500)
        console.log(userData)
        dispatch({ type: "CART", payload: userData })
        dispatch({ type: "ERROR", payload: null });
        dispatch({ type: "LOADING", payload: false });
    } catch (error) {
         dispatch({ type: "ERROR", payload: "Error: Unable to add" });
         dispatch({ type: "LOADING", payload: false });
    }finally{
        dispatch({ type: "LOADING", payload: false });
    }
}

export const removeCartItem = (userData) => async (dispatch, getState) => {
  try {
    dispatch({ type: "LOADING", payload: true });
    await wait(400);
    console.log(userData);
    dispatch({ type: "CART", payload: userData });
    dispatch({ type: "ERROR", payload: null });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    dispatch({ type: "ERROR", payload: "Error: Unable to add"});
    dispatch({ type: "LOADING", payload: false });
  } finally {
    dispatch({ type: "LOADING", payload: false });
  }
};