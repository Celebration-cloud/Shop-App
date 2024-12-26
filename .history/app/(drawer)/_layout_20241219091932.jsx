import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
const DrawerLayout = () => {
  return (
    <Stack>
        
      <Stack.Screen name="drawer" options={{ headerShown: false }} />
    </Stack>
  );
}

export default DrawerLayout

const styles = StyleSheet.create({})