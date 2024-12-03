import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import MenuBar from '../../components/MenuBar';
import { Ionicons } from '@expo/vector-icons';
import MenuAddProduct from '../../components/MenuAddProduct';

const AdminLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="admin"
        options={{ title: "Admin", headerLeft: () => <MenuBar />, headerRight: () => <MenuAddProduct /}}
      />
    </Stack>
  );
}

export default AdminLayout

const styles = StyleSheet.create({})