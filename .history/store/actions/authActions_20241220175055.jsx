import axios from "axios";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase/firebaseConfig";

const wait = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

const SHOP_API = "https://express-api-practice.onrender.com";
axios.defaults.withCredentials = true;

export const signUpAction = (userData, router) => async (dispatch, getState) => {
    try {
        dispatch({ type: "LOADING", payload: true})
        const response = await axios.post(`SH`)
        console.log(userData)
         router.navigate({
           pathname: "(home)",
           params: { session: `${user.email} signed in Successfully` },
         });
        dispatch({ type: "ERROR", payload: null });
        dispatch({ type: "LOADING", payload: false });
    } catch (error) {
         dispatch({ type: "ERROR", payload: "Error: Unable to add" });
         dispatch({ type: "LOADING", payload: false });
    }finally{
        dispatch({ type: "LOADING", payload: false });
    }
}
export const loginAction = (userData, router) => async (dispatch, getState) => {
    try {
        dispatch({ type: "LOADING", payload: true})
        console.log(userData)
        const userCredential = await signInWithEmailAndPassword(auth, userData.email, userData.password); 
      const user = userCredential.user; 
      console.log(user.uid)
        router.navigate({
          pathname: "(home)",
          params: { session: `${userData.email} logged in Successfully` },
        });
        dispatch({ type: "ERROR", payload: null });
        dispatch({ type: "LOADING", payload: false });
    } catch (error) {
        console.log("Error logging in:", error.message)
         dispatch({ type: "ERROR", payload: "Invalid email or password" });
         dispatch({ type: "LOADING", payload: false });
    }finally{
        dispatch({ type: "LOADING", payload: false });
    }
}
export const logoutAction = (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: "LOADING", payload: true})
        console.log(userData)
        dispatch({ type: "ERROR", payload: null });
        dispatch({ type: "LOADING", payload: false });
    } catch (error) {
         dispatch({ type: "ERROR", payload: "Error: Unable to add" });
         dispatch({ type: "LOADING", payload: false });
    }finally{
        dispatch({ type: "LOADING", payload: false });
    }
}