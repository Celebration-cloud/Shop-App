import React from 'react'

import { Dimensions, StyleSheet, Text, useColorScheme, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { useRoute } from '@react-navigation/native'

import {Colors} from '../../constants/Colors'

const TabsLayout = () => {
  const colorMode = useColorScheme()
  const route = useRoute()
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.dark.background,
          height: Dimensions.get("window").height / 10,
          paddingTop: Dimensions.get("window").height / 100,
          display: route.name === "",
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