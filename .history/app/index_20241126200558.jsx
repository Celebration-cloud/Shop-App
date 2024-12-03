import { Button, ButtonText } from "@/components/ui/button";
import { Stack, useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import MenuBar from '../components/MenuBar'
import MenuCart from '../components/MenuCart'
import { useDispatch, useSelector } from "react-redux";
import FlatListCard from '../components/card/FlatListCard';
import { useRef, useState } from "react";
import {addToCart} from "../store/actions/shopActions"
import { Ionicons } from "@expo/vector-icons";
export default function Index() {
  const { shopItems, loading } = useSelector((state) => state.shop);
  const [cart, setCart] = useState([])
  const cartItems = useRef([]);
  const router = useRouter()
  const dispatch = useDispatch()
  const handleCart = () => { 
    router.navigate({pathname: "/cart"})
  };
  const handleAddToCart = (data) => {
    const checkExistingData =
      cartItems.length > 0 ? cart.find((item) => item.id === data.id) : undefined;
    if (cart.length < 1 || !checkExistingData) {
      cartItems.current = [...cartItems.current, { count: 1, ...data }];
    } else {
      const addExistingData = cartItems.current.map((item) =>
        item.id === data.id ? { ...item, count: item.count + 1 } : item
      );
      cartItems.current = addExistingData
    }
    dispatch(addToCart(cartItems));
  }
    const handleDetails = (data) => { console.log(data) };
console.log(loading, cartItems.current.length)
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
      <FlatListCard data={shopItems} handleAddToCart={handleAddToCart} handleDetails={handleDetails} btnLeftTitle="DETAILS" btnRightTitle="ADD TO CART"/>
    </View>
  );
}
