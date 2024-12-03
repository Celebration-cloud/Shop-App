import { Stack, useRouter } from "expo-router";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MenuBar from "../../../components/MenuBar";
import MenuCart from "../../../components/MenuCart";
import { useDispatch, useSelector } from "react-redux";
import FlatListCard from "../../../components/card/FlatListCard";
import { useRef } from "react";
import { addToCart } from "../../../store/actions/shopActions";
export default function Index() {
  const { shopItems, loading, cartItems } = useSelector((state) => state.shop);
  const cart = useRef([]);
  cart.current = cartItems;
  const router = useRouter();
  const dispatch = useDispatch();
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
          headerLeft: () => <MenuBar onPress={() => {}} />,
          headerRight: () => <MenuCart onPress={handleCart} />,
        }}
      />
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

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.4
  },
  loadingText: {
    fontSize: Dimensions.get("window").fontScale *20,
    font
  },
});