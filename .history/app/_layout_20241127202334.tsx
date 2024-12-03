import { Stack, useGlobalSearchParams } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Provider } from 'react-redux';
import store from "../store/storeConfig"
export default function RootLayout() {
  const {name} = useGlobalSearchParams()
  return (
    <GluestackUIProvider mode="system">
      <Provider store={store}>
        <Stack screenOptions={{ headerTitleAlign: "center" }}>
          <Stack.Screen name="(tabs)" o />
        </Stack>
      </Provider>
    </GluestackUIProvider>
  );
}
