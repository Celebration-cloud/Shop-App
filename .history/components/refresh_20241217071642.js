import { getShopItems } from "../store/actions/shopActions";


export const fetchShoppingItems = useCallback(async () => {
  dispatch(getShopItems());

  console.log("done");
}, [dispatch]);
