import { getShopItems } from "../store/actions/shopActions";

const
export const fetchShoppingItems = useCallback(async () => {
  dispatch(getShopItems());

  console.log("done");
}, [dispatch]);
