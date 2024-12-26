import React, { useCallback, useEffect } from 'react'

import { Dimensions, StyleSheet, Text, useColorScheme, View } from 'react-native'

import { Tabs, useNavigation, useRouter } from 'expo-router'

import { Ionicons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'

import { getCartItems, getOrderItems, getShopItems } from '../../../store/actions/shopActions'
import {Colors} from '../../../constants/Colors'
import { sessionAction } from '../../../store/actions/authActions'

const TabsLayout = () => {
  const colorMode = useColorScheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { user, isAuth, token } = useSelector((state) => state.user);
  const fetchItems = useCallback(() => {
    dispatch(getShopItems(token));
       dispatch(getCartItems(token, user));
    console.log("done");
  }, [dispatch, getCartItems, getShopItems, ]);

  useEffect(() => {
     navigation.addListener("state", fetchItems);
    return () => {
        navigation.removeListener("state", fetchItems);
    };
  }, [fetchItems]);

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