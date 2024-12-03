import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AdminLayout = () => {
  return (
    <Stack>
        <Stack.Screen options={{title: "A"}}/>
    </Stack>
  )
}

export default AdminLayout

const styles = StyleSheet.create({})