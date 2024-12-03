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
        <MainButton styl>See More</MainButton>
        <Text></Text>
      </View>
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "blue",
    padding: Dimensions.get("window").scale * 4,
    width: Dimensions.get("window").width / 3,
  },
  text: {
    fontSize: Dimensions.get("window").fontScale * 20,
    color: "white",
  },
});