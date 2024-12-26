import React, { useEffect } from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router';
import axios from 'axios';

const ShopLayout = () => {
  const 
  const SHOP_API = "https://express-api-practice.onrender.com";
  axios.defaults.withCredentials = true;
  const fetchShoppingItems = async () => {
    try {
      const response = await axios.get(`${SHOP_API}/api/shopItem/user/get`);
      
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchShoppingItems();
  }, []);
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