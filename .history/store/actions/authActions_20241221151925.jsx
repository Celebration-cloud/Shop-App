import axios from "axios";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase/firebaseConfig";

const wait = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

const SHOP_API = "https://express-api-practice.onrender.com";
axios.defaults.withCredentials = true;


export const signUpAction =
  (userData, router) => async (dispatch, getState) => {
    try {
      dispatch({ type: "LOADING", payload: true });

      // Sign up user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const user = userCredential.user;
      const userId = user.uid;
      const idToken = await user.getIdToken(); // Use await to retrieve the token

      console.log(`user: ${userId}`);

      try {
        // Make the POST request to your backend with the UID and ID token
        const response = await axios.post(`${SHOP_API}/api/auth/signUp`, {
          uid: userId,
          idToken: idToken,
        });
        console.log(`successful: ${response.data.message}`);
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code outside of the range of 2xx
          console.log(`API error: ${error.response.data.message}`);
          dispatch({ type: "ERROR", payload: error.response.data.message });
        } else if (error.request) {
          // The request was made but no response was received
          console.log("No response received from API");
          dispatch({ type: "ERROR", payload: "No response received from API" });
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(`Error: ${error.message}`);
          dispatch({ type: "ERROR", payload: error.message });
        }
      }

      console.log(`userData: ${userData}`);
      router.navigate({
        pathname: "(home)",
        params: { session: `${userData.email} signed up Successfully` },
      });

      dispatch({ type: "USER", payload: user.uid });
      dispatch({ type: "AUTH", payload: true });
      dispatch({ type: "ERROR", payload: null });
      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      dispatch({ type: "USER", payload: null });
      dispatch({ type: "AUTH", payload: false });
      console.log("Error signing up:", error.message);
      dispatch({ type: "ERROR", payload: error.message });
      dispatch({ type: "LOADING", payload: false });
    } finally {
      dispatch({ type: "LOADING", payload: false });
    }
  };

export const loginAction = (userData, router) => async (dispatch, getState) => {
  try {
    dispatch({ type: "LOADING", payload: true });
    console.log(userData);

    // Sign in with email and password
    const userCredential = await signInWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    const user = userCredential.user;
    const uid = user.uid;
    const idToken = await user.getIdToken(); // Use await to retrieve the token

    console.log(`uid: ${uid}`);

    try {
      // Make the POST request with the UID and ID token
      const response = await axios.post(`${SHOP_API}/api/auth/login`, {
        uid: uid,
        idToken: idToken,
      });
      console.log(`successful: ${response.data.message}`);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code outside of the range of 2xx
        console.log(`api error: ${error.response.data.message}`);
        dispatch({ type: "ERROR", payload: error.response.data.message });
      } else if (error.request) {
        // The request was made but no response was received
        console.log("No response received from API");
        dispatch({ type: "ERROR", payload: "No response received from API" });
      } else {
        // Something else happened while setting up the request
        console.log(`Error: ${error.message}`);
        dispatch({ type: "ERROR", payload: error.message });
      }
    }

    console.log(`userData: ${userData}`);
    // router.navigate({
    //   pathname: "(home)",
    //   params: { session: `${userData.email} logged in Successfully` },
    // });

    dispatch({ type: "USER", payload: user.uid });
    dispatch({ type: "AUTH", payload: true });
    dispatch({ type: "ERROR", payload: null });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    dispatch({ type: "USER", payload: null });
    dispatch({ type: "AUTH", payload: false });
    console.log("Error logging in:", error.message);
    dispatch({ type: "ERROR", payload: error.message });
    dispatch({ type: "LOADING", payload: false });
  } finally {
    dispatch({ type: "LOADING", payload: false });
  }
};


export const sessionAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: "LOADING", payload: true})
        const response = await axios.get(`${SHOP_API}/api/auth/session`);
        console.log(`session: ${response.data}`);
        if(!response.data){
          throw new Error("error session")
        }
        dispatch({type: "USER", payload: response.data})
        dispatch({type: "AUTH", payload: true})
        dispatch({ type: "ERROR", payload: null });
        dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      dispatch({ type: "USER", payload: null });
      dispatch({ type: "AUTH", payload: false });
      dispatch({ type: "ERROR", payload: error.response.data });
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