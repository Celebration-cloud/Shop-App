import { getShopItems } from "../store/actions/shopActions";

const dis
export const fetchShoppingItems = useCallback(async () => {
  dispatch(getShopItems());

  console.log("done");
}, [dispatch]);
