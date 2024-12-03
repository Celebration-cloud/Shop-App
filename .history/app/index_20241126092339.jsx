import { Button, ButtonText } from "@/components/ui/button";
import { Stack, useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import MenuBar from '../components/MenuBar'
import MenuCart from '../components/MenuCart'
import { useSelector } from "react-redux";
import FlatListCard from '../components/card/FlatListCard';
export default function Index() {
  const { shopItems } = useSelector((state) => state.shop);
  const router = useRouter()
  const handleCart = () => { 
    router.navigate({pathname: "/cart"})
   };
   const handleAddToCart = () => {

   }
   const handleDetails = () => {  };
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
      <FlatListCard data={shopItems} onPressLeft={handleAddToCart} onPress/>
    </View>
  );
}
