
import { getShopItems } from "../store/actions/shopActions";
import { useCallback } from "react";

const useGetShopItems = (dis) => {
  const fetchShoppingItems = useCallback(() => {
    dispatch(getShopItems());
    console.log("done");
  }, [dispatch, getShopItems]);
  return fetchShoppingItems;
}

export default useGetShopItems

