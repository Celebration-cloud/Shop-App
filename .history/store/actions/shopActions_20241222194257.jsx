import axios from "axios";
import { ToastAndroid } from "react-native";
const wait = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms))

  const SHOP_API = "https://express-api-practice.onrender.com";
  axios.defaults.withCredentials = true;

export const getShopItems = (token) => async (dispatch, getState) => {
    try {
        dispatch({ type: "LOADING", payload: true})
        const response = await axios.get(`${SHOP_API}/api/shopItem/user/get`, {params: {idToken: token}});
        if(response.status !== 200){
          throw new Error("Server error")
        }
        const data = response.data
        console.log(`data: ${data}`)
        dispatch({ type: "SHOP", payload: data })
        dispatch({ type: "ERROR", payload: null });
        dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      const message =
        error.response.data[0]?.msg ||
        error.response?.data.message ||
        error.message;
      console.log("Get data error:", message);
         dispatch({ type: "ERROR", payload: `${message}` });
         dispatch({ type: "LOADING", payload: false });
    }finally{
        dispatch({ type: "LOADING", payload: false });
    }
}
export const addToCart = (userData, user, token) => async (dispatch, getState) => {
    try {
        dispatch({ type: "LOADING", payload: true})
         const response = await axios.post(
           `${SHOP_API}/api/shopItem/user/addCart`,
           {
             params: { idToken: token, id: userData.id, user: user },
           }
         );
         if(response.status !== 201){
          throw new Error(response.data.message);
         }
         ToastAndroid.show(`${response.data.message}`, T)
        dispatch({ type: "ERROR", payload: null });
        dispatch({ type: "LOADING", payload: false });
    } catch (error) {
         dispatch({ type: "ERROR", payload: `Error: Unable to add, ${error.response.data.message}` });
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
    if(response.status !== 200) {
      throw new Error('Failed to delete item')
    }
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
export const editShopItem = (id, editData) => async (dispatch, getState) => {
  try {
    dispatch({ type: "LOADING", payload: true });
    const response = await axios.patch(`${SHOP_API}/api/shopItem/patch/${id}`, editData)
    if(response.status !== 200){
      throw new Error('Failed to edit item')
    }
    dispatch({ type: "ERROR", payload: null });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
  const message =
    error.response.data[0]?.msg || error.response?.data.message || error.message;
    console.log("Update data error:", message);
    dispatch({ type: "ERROR", payload: `${message}`});
    dispatch({ type: "LOADING", payload: false });
  } finally {
    dispatch({ type: "LOADING", payload: false });
  }
};
export const addShopItem = (userData) => async (dispatch, getState) => {
  try {
    dispatch({ type: "LOADING", payload: true });
    const response = await axios.post(`${SHOP_API}/api/shopItem/post`, userData); 
    if(response.status !== 201){
      throw new Error('Failed to add item')
    }
    console.log(response.data.message);  
    dispatch({ type: "ERROR", payload: null });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    const message =
    error.response.data[0]?.msg || error.response?.data.message || error.message;
    console.log("Add data error:", message);
    dispatch({ type: "ERROR", payload: `${message}`});
    dispatch({ type: "LOADING", payload: false });
  } finally {
    dispatch({ type: "LOADING", payload: false });
  }
};