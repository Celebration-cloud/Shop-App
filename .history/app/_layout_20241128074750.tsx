import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { Stack } from "expo-router";
import { enableScreens } from 'react-native-screens';
import {Drawer} from "expo-router/drawer"
import {GestureHandlerRootView} from "react-native-gesture-handler"

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import store from "../store/storeConfig"

enableScreens()
export default function RootLayout() {
  return (
    <GluestackUIProvider mode="system">
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer
            screenOptions={{ headerTitleAlign: "center", headerShown: false }}
          >
            <Drawer.Screen
              name="(tabs)"
              options={{
                title: "Shop",
                drawerIcon: ({ color }) => (
                  <Ionicons name="storefront-outline" size={25} color={color} />
                ),
                drawerActiveTintColor: "green",
                drawerLabelStyle: {
                  fontSize
                }
              }}
            />
            <Drawer.Screen
              name="(order)"
              options={{
                title: "Order",
                drawerIcon: ({ color }) => (
                  <Ionicons name="storefront-outline" size={25} color={color} />
                ),
              }}
            />
          </Drawer>
        </GestureHandlerRootView>
      </Provider>
    </GluestackUIProvider>
  );
}
