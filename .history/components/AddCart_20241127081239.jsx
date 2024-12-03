import { addToCart } from "@/store/actions/shopActions";
import { useDispatch } from "react-redux";

export const addCart = (data, cart) => {
    const dispatch = useDispatch()
  const checkExistingData =
    cart.current.length > 0
      ? cart.current.find((item) => item.id === data.id)
      : undefined;
  if (cart.length < 1 || !checkExistingData) {
    cart.current = [...cart.current, { count: 1, ...data }];
  } else {
    const addExistingData = cart.current.map((item) =>
      item.id === data.id ? { ...item, count: item.count + 1 } : item
    );
    cart.current = addExistingData;
  }
  dispatch(addToCart(cart.current));
};
