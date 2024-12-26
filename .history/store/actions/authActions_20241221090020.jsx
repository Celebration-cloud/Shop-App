import axios from "axios";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase/firebaseConfig";

const wait = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

const SHOP_API = "https://express-api-practice.onrender.com";
axios.defaults.withCredentials = true;

export const signUpAction = (userData, router) => async (dispatch, getState) => {
    try {
      dispatch({ type: "LOADING", payload: true });
      const response = await axios.post(
        `${SHOP_API}/api/auth/signUp`,
        userData
      );
      if (response.status !== 201) {
        throw new Error(response.data);
      }
      const user = userCredential.user;
      const userId = user.id;
      const idToken = user.getIdToken();
      console.log(`idToken: ${idToken}`);
      console.log(`uid: ${userId}`);
      console.log(`user: ${uid}`);
      try {
        const response = await axios.post(`${SHOP_API}/api/auth/signUp`, {
          uid: uid,
          idToken: idToken,
        });
        console.log(`successful: ${response.data.message}`);
      } catch (error) {
        console.log(`api error: ${error.response.data.message}`)
      }

      console.log(`userData: ${userData}`);
      console.log(`successful: ${response.data.message}`);
      router.navigate({
        pathname: "(home)",
        params: { session: `${userData.email} signed in Successfully` },
      });
      dispatch({ type: "USER", payload: user });
      dispatch({ type: "AUTH", payload: true });
      dispatch({ type: "ERROR", payload: null });
      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      const message = error.response.data.message;
      dispatch({ type: "ERROR", payload: `${message}` });
      dispatch({ type: "LOADING", payload: false });
      dispatch({ type: "USER", payload: null });
      dispatch({ type: "AUTH", payload: true });
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
      const uid = user.uid
      const idToken = user.getIdToken();
       console.log(`idToken: ${idToken}`);
       console.log(`uid: ${uid}`);
      try {
        const response = await axios.post(`${SHOP_API}/api/auth/login`, {
          uid: uid,
          idToken: idToken,
        });
        console.log(`successful: ${response.data.message}`);
      } catch (error) {
        console.log(`api error: ${error.response.data.message}`)
      }
        console.log(`userData: ${userData}`);
        router.navigate({
          pathname: "(home)",
          params: { session: `${userData.email} logged in Successfully` },
        });
        dispatch({type: "USER", payload: user});
        dispatch({type: "AUTH", payload: true});
        dispatch({ type: "ERROR", payload: null });
        dispatch({ type: "LOADING", payload: false });
    } catch (error) {
        dispatch({ type: "USER", payload: null });
        dispatch({ type: "AUTH", payload: false });
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