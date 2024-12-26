import { useCallback, useEffect, useRef } from "react";

import { View } from "react-native";

import { Stack, useNavigation, useRouter } from "expo-router";

import { useDispatch, useSelector } from "react-redux";

import FlatListCard from "../../../../components/card/FlatListCard";
import LoadingScreen from "../../../../components/LoadingScreen"
import MenuBar from "../../../../components/MenuBar";
import MenuCart from "../../../../components/MenuCart";
import { addToCart, getShopItems } from "../../../../store/actions/shopActions";

export default function HomeScreen() {
  const { shopItems, loading, cartItems } = useSelector((state) => state.shop);
  const { user, isAuth, token } = useSelector((state) => state.user);
       console.log(`User: ${user}, Auth: ${isAuth}, idToken: ${token} logged in`);
  const cart = useRef([]);
  cart.current = cartItems;
  const router = useRouter();
 const dispatch = useDispatch();

  const handleCart = () => {
    router.navigate({ pathname: "/cart" });
  };
  const handleAddToCart = (data) => {

    dispatch(addToCart(data, user, token));
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
        data={shopItems}
        handleRightButton={handleAddToCart}
        handleLeftButton={handleDetails}
        btnLeftTitle="DETAILS"
        btnRightTitle="ADD TO CART"
      />
    </View>
  );
}