import { Dimensions, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {Colors} from '../../constants/Colors'
const TabsLayout = () => {
  const colorMode = useColorScheme()
  return (
    <Tabs screenOptions={{}} initialRouteName="(shop)">
      <Tabs.Screen
        name="(shop)"
        options={{
          title: "Shop",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.dark.background,
            height: Dimensions.get("window").height / 10,
          },
          tab
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