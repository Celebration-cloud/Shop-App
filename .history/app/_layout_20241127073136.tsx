import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Provider } from 'react-redux';
import store from "../store/storeConfig"
export default function RootLayout() {
  const {name} = useLs
  return (
    <GluestackUIProvider mode="system">
      <Provider store={store}>
        <Stack screenOptions={{ headerTitleAlign: "center" }}>
          <Stack.Screen name="index" options={{ title: "Shop" }} />
          <Stack.Screen name="cart" options={{ title: "Cart" }} />
          <Stack.Screen name="detail/[name]" />
        </Stack>
      </Provider>
    </GluestackUIProvider>
  );
}
