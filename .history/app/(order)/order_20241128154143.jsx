import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { useSelector } from 'react-redux'
import MainButton from '../../components/MainButton.android'

const OrderScreen = () => {
  const { orderItems } = useSelector(state => state.shop)
  console.log(orderItems)
  return (
    <View>
      <Text>{orderItems.length}</Text>
      <View>
        <Text></Text>
        <MainButton>See More</MainButton>
        <Text></Text>
      </View>
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
  
})