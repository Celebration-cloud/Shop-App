import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack, useNavigation, useRouter } from 'expo-router';

const ShopLayout = () => {
  const navigation = useNavigation()
  console.log(navig)
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        tabBarStyle: {
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