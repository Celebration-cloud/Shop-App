import React, { useEffect } from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {getShopItems} from "../../../store/actions/shopActions"
const ShopLayout = () => {
  const dispatch = useDispatch()
  const SHOP_API = "https://express-api-practice.onrender.com";
  axios.defaults.withCredentials = true;
  const fetchShoppingItems = async () => {
    try {
      const response = await axios.get(`${SHOP_API}/api/shopItem/user/get`);
      dispatch(getShopItems(response.da))
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
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