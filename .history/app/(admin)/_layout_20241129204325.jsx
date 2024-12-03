import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AdminLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='admin' options={{title: "Admin"}}/>
    </Stack>
  )
}

export default AdminLayout

const styles = StyleSheet.create({})