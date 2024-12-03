import { Provider } from 'react-redux';
import { Stack } from "expo-router";
import { enableScreens } from 'react-native-screens';

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import store from "../store/storeConfig"
import {GestureHandlerRootView} from "react-native-gesture-handler"

enableScreens()
export default function RootLayout() {
  return (
    <GluestackUIProvider mode="system">
      <Provider store={store}>
        <GestureHandlerRootView>

        <Drawer>

        </Drawer>
        </GestureHandlerRootView>
        <Stack screenOptions={{ headerTitleAlign: "center" }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </Provider>
    </GluestackUIProvider>
  );
}