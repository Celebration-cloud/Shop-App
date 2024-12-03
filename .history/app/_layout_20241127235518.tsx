import { Stack } from "expo-router";
import {Drawer} from "expo-router/drawer";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import { Provider } from 'react-redux';
import store from "../store/storeConfig"
export default function RootLayout() {
  return (
    <GluestackUIProvider mode="system">
      <Provider store={store}>
        <GestureHandlerRootView style={{flex: 1}}>
          <Drawer>
            <Drawer.
          </Drawer>
        </GestureHandlerRootView>
        <Stack screenOptions={{ headerTitleAlign: "center" }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </Provider>
    </GluestackUIProvider>
  );
}
