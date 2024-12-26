import React, { useCallback, useEffect } from 'react'

import { Dimensions, StyleSheet, Text, useColorScheme, View } from 'react-native'

import { Tabs, useNavigation, useRouter } from 'expo-router'

import { Ionicons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'

import { getCartItems, getShopItems } from '../../../store/actions/shopActions'
import {Colors} from '../../../constants/Colors'
import { sessionAction } from '../../../store/actions/authActions'

const TabsLayout = () => {
  const colorMode = useColorScheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const router = useRouter()
  const { user, isAuth, token } = useSelector((state) => state.user);
  const fetchShoppingItems = useCallback(() => {
    dispatch(getShopItems(token));
    console.log("done");
  }, [dispatch]);
  const fetchCartItems = useCallback(() => {
    dispatch(getCartItems(token, user));
    console.log("done");
  }, [dispatch]);
  const fetchOrderItems = useCallback(() => {
    dispatch(getOrItems(token, user));
    console.log("done");
  }, [dispatch]);

  useEffect(() => {
    navigation.addListener("state", fetchOrderItems);
    return () => {
      navigation.removeListener("state", fetchOrderItems);
    };
  }, [fetchOrderItems]);

  useEffect(() => {
    navigation.addListener("state", fetchCartItems);
    return () => {
      navigation.removeListener("state", fetchCartItems);
    };
  }, [fetchCartItems]);

  useEffect(() => {
    navigation.addListener("state", fetchShoppingItems);

    return () => {
      navigation.removeListener("state", fetchShoppingItems);
    };
  }, [fetchShoppingItems]);

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.dark.background,
          height: Dimensions.get("window").height / 10,
          paddingTop: Dimensions.get("window").height / 100,
        },
        tabBarLabelStyle: {
          fontSize: Dimensions.get("window").fontScale * 18,
        },
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: Colors.light.background,
      }}
    >
      <Tabs.Screen
        name="(shop)"
        options={{
          title: "Shop",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="storefront-outline" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(user)"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default TabsLayout

const styles = StyleSheet.create({})