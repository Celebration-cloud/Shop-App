import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderScreen = () => {
  const { orderItems } = useSelector(state => state.shop)
  console.log()
  return (
    <View>
      <Text>OrderScreen</Text>
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})