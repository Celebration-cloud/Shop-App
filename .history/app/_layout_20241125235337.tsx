import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="system">
      <Provide
      <Stack screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen name="index" options={{ title: "Shop" }} />
      </Stack>
    </GluestackUIProvider>
  );
}
