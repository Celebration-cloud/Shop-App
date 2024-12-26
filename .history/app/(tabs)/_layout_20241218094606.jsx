import React, { useEffect } from 'react'

import { Dimensions, StyleSheet, Text, useColorScheme, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { Tabs, useNavigation } from 'expo-router'

import {Colors} from '../../constants/Colors'

const TabsLayout = () => {
  const colorMode = useColorScheme()
   const dispatch = useDispatch();
    const navigation = useNavigation();

    const fetchShoppingItems = useCallback(() => {
      dispatch(getShopItems());
      console.log("done");
    }, [dispatch]);

    useEffect(() => {
      const refresh = navigation.addListener("focus", fetchShoppingItems);

      return () => {
        refresh();
      };
    }, []);

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
      initialRouteName="(shop)"
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