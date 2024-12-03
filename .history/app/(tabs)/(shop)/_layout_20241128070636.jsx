import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router';

const ShopLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        tabBarStyle: {
          backgroundColor: Colors.dark.background,
          height: Dimensions.get("window").height / 10,
          paddingTop: Dimensions.get("window").height / 100,
          display: route.name === "detail/[name]" ? "none" : "",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Shop" }} />
      <Stack.Screen name="cart" options={{ title: "Cart" }} />
      <Stack.Screen name="detail/[name]" />
    </Stack>
  );
}

export default ShopLayout

const styles = StyleSheet.create({})