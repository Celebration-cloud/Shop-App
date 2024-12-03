import React from 'react'

import { Dimensions, StyleSheet, Text, View } from 'react-native'

import { useSelector } from 'react-redux'
import MainButton from '../../components/MainButton.android'

const OrderScreen = () => {
  const { orderItems } = useSelector(state => state.shop)
  console.log(orderItems)
  return (
    <View>
      <Text>Number Of Order: {orderItems.length}</Text>
      <View>
        <Text>$300</Text>
        <MainButton style={styles.btn} text={styles.text}>See More</MainButton>
        <Text>23/24/2024</Text>
      </View>
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Dimensions.get("window").scale * 4,
    gap: 4,
  },
  group1: {
    padding: Dimensions.get("window").scale * 4,
    flexDirection: "row",
    alignItems: "center",
    height: Dimensions.get("window").he:
  },
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