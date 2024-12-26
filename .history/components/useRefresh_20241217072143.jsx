import { useDispatch } from "react-redux";
import { getShopItems } from "../store/actions/shopActions";
import { useCallback } from "react";

const dispatch = useDispatch()
const useGetShopItems = () => {
  const getShopItems = useCallback(() => {
    dispatch(getShopItems())
    console.log("done");
    
    }, [dispatch, getShopItems])
    return getShopItems
    }

