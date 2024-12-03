import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AdminLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="admin"
        options={{ title: "Admin", headerLeft: () => <MenuBar /> }}
      />
    </Stack>
  );
}

export default AdminLayout

const styles = StyleSheet.create({})