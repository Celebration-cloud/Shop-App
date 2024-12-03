import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import MenuBar from "../../components/MenuBar"
const OrderLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="order"
        options={{
          title: "YourOrders",
          headerLeft: () => <MenuBar />,
        }}
      />
    </Stack>
  );
}

export default OrderLayout

const styles = StyleSheet.create({})