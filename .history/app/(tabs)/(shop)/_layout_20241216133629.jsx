import React, { useEffect } from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {getShopItems} from "../../../store/actions/shopActions"
const ShopLayout = () => {
  const dispatch = useDispatch()
  axios.defaults.withCredentials = true;
  const fetchShoppingItems = async () => {
    try {
      dispatch(getShopItems())
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