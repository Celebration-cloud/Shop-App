export const addToCart = (userData) => async (dispatch, getState) => {
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