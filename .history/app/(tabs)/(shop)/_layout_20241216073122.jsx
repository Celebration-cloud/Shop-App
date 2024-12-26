import React, { useEffect } from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router';
import axios from 'axios';

const ShopLayout = () => {

const SHOP_API = "https://shop-app-api-8990.onrender.com"
axios.defaults.withCredentials = true
  const fetchShoppingItems = async () => {
    
    const response = await axios.get(`${SHOP_API}/api/shopItems/user/get`);
    console.log(response.data);
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