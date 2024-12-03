import { Button, ButtonText } from "@/components/ui/button";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import MenuBar from '../components/MenuBar'
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack.Screen options={{headerLeft: () => (
        <MenuBar/>
      ), headerRight: () => (
        <M
      )}}/>
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <View>
        <Button size="md" variant="solid" action="primary">
          <ButtonText>Hello World!</ButtonText>
        </Button>
      </View>
    </View>
  );
}
