import { Button, ButtonText } from "@/components/ui/button";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import MenuBar from '../components/MenuBar'
import MenuCart from '../components/MenuCart'
import { useSelector } from "react-redux";
import FlatListCard from '../components/card/
export default function Index() {
  const { shopItems } = useSelector((state) => state.shop);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Stack.Screen
        options={{
          headerLeft: () => <MenuBar onPress={() => {}} />,
          headerRight: () => <MenuCart onPress={() => {}} />,
        }}
      />
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <FlatListCard/>
    </View>
  );
}
