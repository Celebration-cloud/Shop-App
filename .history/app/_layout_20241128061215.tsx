import { Provider } from 'react-redux';
import { Stack } from "expo-router";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import store from "../store/storeConfig"
import { enableScreens } from 'react-native-screens';
enableScreens

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="system">
      <Provider store={store}>
        <Stack screenOptions={{ headerTitleAlign: "center" }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </Provider>
    </GluestackUIProvider>
  );
}
