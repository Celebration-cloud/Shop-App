import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import MenuBar from '../../components/MenuBar';

const AdminLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="admin"
        options={{ title: "Admin", headerLeft: () => <MenuBar />, headerRight: () => <}}
      />
    </Stack>
  );
}

export default AdminLayout

const styles = StyleSheet.create({})