import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <GluestackUIProvider
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
