import { useDispatch } from "react-redux";
import { getShopItems } from "../store/actions/shopActions";

const dispatch = useDispatc
export const fetchShoppingItems = useCallback(async () => {
  dispatch(getShopItems());

  console.log("done");
}, [dispatch]);
