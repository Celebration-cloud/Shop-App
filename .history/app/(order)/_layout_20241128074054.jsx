import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import MenuBar from "../../components/MenuBar"
const OrderLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='order' options={{title: "Orders", headerLeft: () => (<MenuBar />), hea}}/>
    </Stack>
  )
}

export default OrderLayout

const styles = StyleSheet.create({})