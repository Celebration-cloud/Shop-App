export const addToCart = (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: "LOADING", })
        const { data } = await axios.post(URL, userData)
        dispatch({ type: "A", payload: data })
    } catch (error) {
         dispatch({ type: actionType, payload: error.message })
    }
}