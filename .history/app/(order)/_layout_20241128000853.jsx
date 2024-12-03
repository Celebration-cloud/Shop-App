import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import MenuVa
const OrderLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='order' options={{title: "Orders", headerLeft: () => (<MenuBar />)}}/>
    </Stack>
  )
}

export default OrderLayout

const styles = StyleSheet.create({})