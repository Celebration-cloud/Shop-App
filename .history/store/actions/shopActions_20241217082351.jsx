import axios from "axios";
const wait = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms))

  const SHOP_API = "https://express-api-practice.onrender.com";
  axios.defaults.withCredentials = true;

export const getShopItems = () => async (dispatch, getState) => {
    try {
        dispatch({ type: "LOADING", payload: true})
        const response = await axios.get(`${SHOP_API}/api/shopItem/user/get`);
        if(!response.data){
          throw new Error("Server error")
        }
        const data = response.data
        console.log(`data: ${data}`)
        dispatch({ type: "SHOP", payload: data })
        dispatch({ type: "ERROR", payload: null });
        dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      const message = error.response.data.message
      console.log(message)
         dispatch({ type: "ERROR", payload: `${message}` });
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
export const removeShopItem = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: "LOADING", payload: true });
    const response = await axios.delete(`${SHOP_API}/api/shopItem/delete/${id}`)
     console.log(response.data.message); 
    dispatch({ type: "ERROR", payload: null });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
     const message = error.response.data.message
    console.log(message);
    dispatch({ type: "ERROR", payload: `${message}`});
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
    const response = await axios.post(`${SHOP_API}/api/shopItem/post`, userData); 
    console.log(response.data.message);  
    dispatch({ type: "ERROR", payload: null });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    const message = error.response.data[0]?.msg
    const error = error.response.data?.message
    console.log(message);
    console.log(error.response.data[0].msg);
    dispatch({ type: "ERROR", payload: `${message}`});
    dispatch({ type: "LOADING", payload: false });
  } finally {
    dispatch({ type: "LOADING", payload: false });
  }
};