import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { useSelector } from 'react-redux'

const OrderScreen = () => {
  const { orderItems } = useSelector(state => state.shop)
  console.log(orderItems)
  return (
    <View>
      <View>
        <Text></Text>
        <M
        <Text></Text>
      </View>
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})