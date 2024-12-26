import { useEffect } from "react"

const wait = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms))

export const getShopItems = (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: "LOADING", payload: true})
        await wait(500)
        dispatch({ type: "", payload: userData })
        dispatch({ type: "ERROR", payload: null });
        dispatch({ type: "LOADING", payload: false });
    } catch (error) {
         dispatch({ type: "ERROR", payload: "Error: Unable to add" });
         dispatch({ type: "LOADING", payload: false });
    }finally{
        dispatch({ type: "LOADING", payload: false });
    }
}
export const addToCart = (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: "LOADING", payload: true})
        await wait(500)
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
    await wait(100);
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
export const clearCartItem = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "LOADING", payload: true });
    await wait(100);
    dispatch({ type: "CART", payload: [] });
    dispatch({ type: "ERROR", payload: null });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    dispatch({ type: "ERROR", payload: "Error: Unable to add"});
    dispatch({ type: "LOADING", payload: false });
  } finally {
    dispatch({ type: "LOADING", payload: false });
  }
};

export const addOrderItem = (userData) => async (dispatch, getState) => {
  try {
    dispatch({ type: "LOADING", payload: true });
    await wait(100);
    dispatch({ type: "ORDER", payload: userData });
    dispatch({ type: "ERROR", payload: null });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    dispatch({ type: "ERROR", payload: "Error: Unable to add"});
    dispatch({ type: "LOADING", payload: false });
  } finally {
    dispatch({ type: "LOADING", payload: false });
  }
};
export const removeShopItem = (userData) => async (dispatch, getState) => {
  try {
    dispatch({ type: "LOADING", payload: true });
    await wait(100);
    dispatch({ type: "SHOP", payload: userData });
    dispatch({ type: "ERROR", payload: null });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    dispatch({ type: "ERROR", payload: "Error: Unable to add"});
    dispatch({ type: "LOADING", payload: false });
  } finally {
    dispatch({ type: "LOADING", payload: false });
  }
};
export const editShopItem = (userData) => async (dispatch, getState) => {
  try {
    dispatch({ type: "LOADING", payload: true });
    await wait(100);
    dispatch({ type: "SHOP", payload: userData });
    dispatch({ type: "ERROR", payload: null });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    dispatch({ type: "ERROR", payload: "Error: Unable to add"});
    dispatch({ type: "LOADING", payload: false });
  } finally {
    dispatch({ type: "LOADING", payload: false });
  }
};
export const addShopItem = (userData) => async (dispatch, getState) => {
  try {
    dispatch({ type: "LOADING", payload: true });
    await wait(100);
    dispatch({ type: "SHOP", payload: userData });
    dispatch({ type: "ERROR", payload: null });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    dispatch({ type: "ERROR", payload: "Error: Unable to add"});
    dispatch({ type: "LOADING", payload: false });
  } finally {
    dispatch({ type: "LOADING", payload: false });
  }
};