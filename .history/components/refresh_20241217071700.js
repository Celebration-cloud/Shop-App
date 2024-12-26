import { getShopItems } from "../store/actions/shopActions";

const dispatch = useDispatch
export const fetchShoppingItems = useCallback(async () => {
  dispatch(getShopItems());

  console.log("done");
}, [dispatch]);
