import { Stack, useRouter } from "expo-router";
import { Text, View } from "react-native";
import MenuBar from '../components/MenuBar'
import MenuCart from '../components/MenuCart'
import { useDispatch, useSelector } from "react-redux";
import FlatListCard from '../components/card/FlatListCard';
import { useRef } from "react";
import {addToCart} from "../store/actions/shopActions"
import {addCart} f
export default function Index() {
  const { shopItems, loading, cartItems } = useSelector((state) => state.shop);
  const cart = useRef([]);
  cart.current = cartItems;
  const router = useRouter()
  const dispatch = useDispatch()
  const handleCart = () => { 
    router.navigate({pathname: "/cart"})
  };
  const handleAddToCart = (data) => {
    addCart(data)
  }
    const handleDetails = (data) => { 
      console.log(data) 
      router.navigate({pathname: "detail/[name]", params: {name: data.name, description: data.description, url: data.imageUrl, price: data.price, id: data.id, category: data.category}});
    };
console.log(loading, cart.current.length)
  return (
    <View
      style={{
        flex: 1,
        marginBottom: 20
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
