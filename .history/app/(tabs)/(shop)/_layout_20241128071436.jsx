import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router';
import { useRoute } from '@react-navigation/native';

const ShopLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Shop" }} />
      <Stack.Screen name="cart" options={{ title: "Cart" }} />
      <Stack.Screen
        name="detail/[name]"
        options={{
          tabBarStyle: {
            display: "none",
          },
        }}
      />
    </Stack>
  );
}

export default ShopLayout

const styles = StyleSheet.create({})