import { useDispatch } from "react-redux";
import { getShopItems } from "../store/actions/shopActions";
import { useCallback } from "react";

const dispatch = useDispatch()
export const fetchShoppingItems = useCallback(async () => {
  dispatch(getShopItems());

  console.log("done");
}, [dispatch]);
