import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {Drawer} from "expo-router/drawer";
const DrawerNavigation = () => {
  return (
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
        initialRouteName="(auth)"
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
            title: "Orders",
            drawerIcon: ({ color }) => (
              <Ionicons name="list" size={25} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="(admin)"
          options={{
            title: "Admin",
            drawerIcon: ({ color }) => (
              <Ionicons name="create" size={25} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="(auth)"
          options={{ drawerItemStyle: { display: "none" } }}
        />
      </Drawer>
    </GestureHandlerRootVie>
  );
}

export default DrawerNavigation

const styles = StyleSheet.create({})