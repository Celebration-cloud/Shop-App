export const addToCart = (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: "LOADIN", })
        const { data } = await axios.post(URL, userData)
        dispatch({ type: actionType, payload: data })
    } catch (error) {
         dispatch({ type: actionType, payload: error.message })
    }
}