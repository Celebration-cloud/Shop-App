import { Button, ButtonText } from "@/components/ui/button";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <S
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <View>
        <Button size="md" variant="solid" action="secondary">
          <ButtonText>Hello World!</ButtonText>
        </Button>
      </View>
    </View>
  );
}
