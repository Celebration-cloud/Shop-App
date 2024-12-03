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
  console.log(shopItems)
  const handleCart = () => { 
    router.navigate({h})
   };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Stack.Screen
        options={{
          headerLeft: () => <MenuBar onPress={handleCart} />,
          headerRight: () => <MenuCart onPress={() => {}} />,
        }}
      />
      <FlatListCard data={shopItems}/>
    </View>
  );
}
