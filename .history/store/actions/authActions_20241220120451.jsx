import { auth } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
export const signUpAction = (userData) => async (dispatch, getState) => {
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
export const loginAction = (userData, router) => async (dispatch, getState) => {
    try {
        dispatch({ type: "LOADING", payload: true})
        console.log(userData)
        const userCredential = await signInWithEmailAndPassword(auth, userData.email, userData.password); 
      const user = userCredential.user; 
        router.navigate({
          pathname: "(home)",
          params: { session: `${userData.email} logged in Successfully` },
        });
        dispatch({ type: "ERROR", payload: null });
        dispatch({ type: "LOADING", payload: false });
    } catch (error) {
         dispatch({ type: "ERROR", payload: error.message });
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