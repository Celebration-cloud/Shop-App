import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {Colors} from '../../constants/Colors'
const TabsLayout = () => {
  const colorMode
  return (
    <Tabs screenOptions={{}} initialRouteName="(shop)">
      <Tabs.Screen
        name="(shop)"
        options={{ title: "Shop", headerShown: false, tabBarBackground: Colors. }}
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