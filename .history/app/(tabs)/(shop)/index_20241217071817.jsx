import { useCallback, useEffect, useRef } from "react";

import { View } from "react-native";

import { Stack, useNavigation, useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";

import FlatListCard from "../../../components/card/FlatListCard";
import LoadingScreen from "../../../components/LoadingScreen"
import MenuBar from "../../../components/MenuBar";
import MenuCart from "../../../components/MenuCart";
import { addToCart, getShopItems } from "../../../store/actions/shopActions";


export default function Index() {
  const { shopItems, loading, cartItems } = useSelector((state) => state.shop);
  const cart = useRef([]);
  cart.current = cartItems;
  const router = useRouter();
  const dispatch = useDispatch()
   const navigation = useNavigation();
  
    // const fetchShoppingItems = useCallback(async () => {
    //   dispatch(getShopItems());

    //   console.log("done")
    // }, [dispatch]);

    useEffect(() => {
      const refresh = navigation.addListener("focus", fetchShoppingItems);

      return () => {
        refresh();
      };
    }, [fetchShoppingItems]);
  
    useEffect(() => {
      fetchShoppingItems();
    }, [fetchShoppingItems]);
  const handleCart = () => {
    router.navigate({ pathname: "/cart" });
  };
  const handleAddToCart = (data) => {
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
  const handleDetails = (data) => {
    console.log(data);
    router.navigate({
      pathname: "detail/[name]",
      params: {
        name: data.name,
        description: data.description,
        url: data.imageUrl,
        price: data.price,
        id: data.id,
        category: data.category,
      },
    });
  };
  console.log(loading, cart.current.length);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Stack.Screen
        options={{
          headerLeft: () => <MenuBar />,
          headerRight: () => <MenuCart onPress={handleCart} />,
        }}
      />
     <LoadingScreen />
      <FlatListCard
      fetchShoppingItems={fetchShoppingItems}
        data={shopItems}
        handleRightButton={handleAddToCart}
        handleLeftButton={handleDetails}
        btnLeftTitle="DETAILS"
        btnRightTitle="ADD TO CART"
      />
    </View>
  );
}