import { StyleSheet, Text, View } from 'react-native'
import React, { Fragment } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerTitleAlign: "center",
          headerShown: true,
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
        initialRouteName="(tabs)"
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
      </Drawer>
    </GestureHandlerRootView>
  );
}

export default DrawerLayout

const styles = StyleSheet.create({})