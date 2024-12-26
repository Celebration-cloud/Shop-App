import React, { useEffect } from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router';
const ShopLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="index" options={{ title: "All Products" }} />
      <Stack.Screen name="cart" options={{ title: "Cart" }} />
      <Stack.Screen name="detail/[name]" />
    </Stack>
  );
}

export default ShopLayout

const styles = StyleSheet.create({})