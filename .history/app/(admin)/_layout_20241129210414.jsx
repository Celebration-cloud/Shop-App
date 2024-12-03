import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import MenuBar from '../../components/MenuBar';
import { Ionicons } from '@expo/vector-icons';

const AdminLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="admin"
        options={{ title: "Admin", headerLeft: () => <MenuBar />, headerRight: () => <Ionicons name='add-circle-outline' size={}/>}}
      />
    </Stack>
  );
}

export default AdminLayout

const styles = StyleSheet.create({})