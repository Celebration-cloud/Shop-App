import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Provider } from 'react-redux';

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="system">
      <Provider store={st}>
        <Stack screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen name="index" options={{ title: "Shop" }} />
      </Stack>
      </Provider>
      
    </GluestackUIProvider>
  );
}
