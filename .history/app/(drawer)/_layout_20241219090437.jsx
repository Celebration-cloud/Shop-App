import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const DrawerLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='drawer' />
    </Stack>
  )
}

export default DrawerLayout

const styles = StyleSheet.create({})