import { Button, ButtonText } from "@/components/ui/button";
import { Stack, useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import MenuBar from '../components/MenuBar'
import MenuCart from '../components/MenuCart'
import { useSelector } from "react-redux";
import FlatListCard from '../components/card/FlatListCard';
import { useState } from "react";
export default function Index() {
  const { shopItems } = useSelector((state) => state.shop);
  const router = useRouter()
  const [cart, setCart] = useState([])
  const handleCart = () => { 
    router.navigate({pathname: "/cart"})
  };
  const handleAddToCart = (data) => {
     const checkExistingData = cart.length > 0 ? cart.find((item) => item.id === data.id ) : undefined;
     if(cart.length < 1 || !checkExistingData){
       setCart(prev => {return [...prev, {count: 1, ...data}]})
     }else if(checkExistingData){
      const addExistingData = cart.
     }
    }
    const handleDetails = (data) => { console.log(data) };
    
    console.log(cart)

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
