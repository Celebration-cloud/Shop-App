import { useDispatch } from "react-redux";
import { getShopItems } from "../store/actions/shopActions";
import { useCallback } from "react";

const dispatch = useDispatch()
const useGetShopItems = () => {
  const getShopItems = useCallback(() => {
    dispatch(getShopItems())
    }, [dispatch, getShopItems])
    return getShopItems
    }
    
export const fetchShoppingItems = useCallback(async () => {
  dispatch(getShopItems());

  console.log("done");
}, [dispatch]);
