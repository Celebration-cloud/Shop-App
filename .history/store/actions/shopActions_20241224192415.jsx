import axios from "axios";
import { ToastAndroid } from "react-native";
import Toast from "react-native-toast-message";
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
export const getCartItems = (token, user) => async (dispatch, getState) => {
    try {
        dispatch({ type: "LOADING", payload: true})
        const response = await axios.get(
          `${SHOP_API}/api/shopItem//user/carts`,
          { params: { idToken: token, user: user } }
        );
        if(response.status !== 200){
          throw new Error("Server error")
        }
        const data = response.data
        console.log(`cart: ${data}`)
        dispatch({ type: "CART", payload: data })
        dispatch({ type: "ERROR", payload: null });
        dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      const message =
        error.response.data[0]?.msg ||
        error.response?.data.message ||
        error.message;
      console.log("Get cart error:", message);
         dispatch({ type: "ERROR", payload: `${message}` });
         dispatch({ type: "LOADING", payload: false });
    }finally{
        dispatch({ type: "LOADING", payload: false });
    }
}
export const getOrderItems = (token, user) => async (dispatch, getState) => {
    try {
        dispatch({ type: "LOADING", payload: true})
        const response = await axios.get(
          `${SHOP_API}/api/shopItem//user/orders`,
          { params: { idToken: token, user: user } }
        );
        if(response.status !== 200){
          throw new Error("Server error")
        }
        const data = response.data
        console.log(`order: ${data}`)
        dispatch({ type: "ORDER", payload: data })
        dispatch({ type: "ERROR", payload: null });
        dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      const message =
        error.response.data[0]?.msg ||
        error.response?.data.message ||
        error.message;
      console.log("Get order error:", message);
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
           `${SHOP_API}/api/shopItem/user/addCart/${userData.id}?idToken=${token}&user=${user}`
         );
         if(response.status !== 201){
          throw new Error(response.data.message);
         }
         ToastAndroid.show(`${response.data.message}`, ToastAndroid.TOP, ToastAndroid.LONG)
          const cartItems = response.data.cartItems;
          dispatch({ type: "CART", payload: cartItems });
        dispatch({ type: "ERROR", payload: null });
        dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      console.log(`Error: Unable to add, ${error.response.data}`);
         dispatch({ type: "ERROR", payload: `Error: Unable to add, ${error.response.data.message}` });
         dispatch({ type: "LOADING", payload: false });
    }finally{
        dispatch({ type: "LOADING", payload: false });
    }
}

export const removeCartItem = (userData, user, token) => async (dispatch, getState) => {
  console.log(`${userData.id} deleted`);
  try {
    dispatch({ type: "LOADING", payload: true });
    const response = await axios.delete(
      `${SHOP_API}/api/shopItem/user/removeCart/${userData.id}?idToken=${token}&user=${user}`
    );
    if (response.status !== 200) {
      throw new Error(response.data.message);
    }
    ToastAndroid.show(
      `${response.data.message}`,
      ToastAndroid.TOP,
      ToastAndroid.LONG
    );
    const cartItems = response.data.cartItems
    console.log(`cart items: ${cartItems}`)
    dispatch({ type: "CART", payload: cartItems });
    dispatch({ type: "ERROR", payload: null });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
   dispatch({
     type: "ERROR",
     payload: `Error: Unable to add, ${error.response.data.message}`,
   });
    dispatch({ type: "LOADING", payload: false });
  }
};


export const addOrderItem = (userData, user, token) => async (dispatch, getState) => {
    try {
      dispatch({ type: "LOADING", payload: true });

      const response = await axios.post(
        `${SHOP_API}/api/shopItem/user/addOrder?totalAmount=${userData.totalSum}&idToken=${token}&user=${user}`
      );

      if (response.status !== 201) {
        throw new Error(response.data.message || "Error adding order");
      }

      ToastAndroid.show(
        `${response.data.message}`,
        ToastAndroid.TOP,
        ToastAndroid.LONG
      );

      dispatch({ type: "ORDER", payload: response.data.order });
      dispatch({ type: "CART", payload: response.data.cart });
      dispatch({ type: "ERROR", payload: null });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: `Error: ${
          error.response ? error.response.data.message : error.message
        }`,
      });
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