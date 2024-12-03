import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ShopLayout = () => {
  return (
    <StacK screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen name="index" options={{ title: "Shop" }} />
      <Stack.Screen name="cart" options={{ title: "Cart" }} />
      <Stack.Screen name="detail/[name]" />
    </StacK>
  );
}

export default ShopLayout

const styles = StyleSheet.create({})