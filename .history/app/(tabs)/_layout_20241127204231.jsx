import { Dimensions, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {Colors} from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
const TabsLayout = () => {
  const colorMode = useColorScheme()
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.dark.background,
          height: Dimensions.get("window").height / 10,
        },
      }}
      initialRouteName="(shop)"
    >
      <Tabs.Screen
        name="(shop)"
        options={{
          title: "Shop",
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: Dimensions.get("window").fontScale * 18,
          },
          tabBarActiveTintColor: Colors.dark.tabIconSelected,
          tabBarI
          tabBarIcon: () => (
            <Ionicons />
          )
        }}
      />
      <Tabs.Screen
        name="(user)"
        options={{ title: "Profile", headerShown: false }}
      />
    </Tabs>
  );
}

export default TabsLayout

const styles = StyleSheet.create({})