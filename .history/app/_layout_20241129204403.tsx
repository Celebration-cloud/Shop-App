import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { Stack } from "expo-router";
import { enableScreens } from 'react-native-screens';
import {Drawer} from "expo-router/drawer"
import {GestureHandlerRootView} from "react-native-gesture-handler"

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import store from "../store/storeConfig"
import { Dimensions } from 'react-native';

enableScreens()
export default function RootLayout() {
  return (
    <GluestackUIProvider mode="system">
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer
            screenOptions={{
              headerTitleAlign: "center",
              headerShown: false,
              drawerActiveTintColor: "green",
              drawerLabelStyle: {
                fontSize: Dimensions.get("window").fontScale * 20,
              },
              drawerStyle: {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                width: Dimensions.get("window").width - 150,
              },
            }}
          >
            <Drawer.Screen
              name="(tabs)"
              options={{
                title: "Shop",
                drawerIcon: ({ color }) => (
                  <Ionicons name="storefront-outline" size={25} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="(order)"
              options={{
                title: "YOrder",
                drawerIcon: ({ color }) => (
                  <Ionicons name="storefront-outline" size={25} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="(admin)"
              options={{
                title: "Amin",
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
