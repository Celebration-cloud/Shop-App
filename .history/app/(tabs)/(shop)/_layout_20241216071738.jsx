import React, { useEffect } from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router';
import axios from 'axios';

const ShopLayout = () => {
const SHOP_
  const fetchShoppingItems = async () => {
    const response = await axios.get(`https://shop-app-api-8990.onrender.com/api/shopItems`).;
  }
  useEffect(() => {
    
  
    return () => {
      second
    }
  }, [third])
  
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