import React from 'react'

import { Dimensions, StyleSheet, Text, View } from 'react-native'

import { useSelector } from 'react-redux'
import MainButton from '../../components/MainButton.android'

const OrderScreen = () => {
  const { orderItems } = useSelector(state => state.shop)
  console.log(orderItems)
  return (
    <View style={styles.container}>
      <Text style={styles.orderTitle}>
        Number Of Order: {orderItems.length}
      </Text>
      <View style={styles.group1}>
        <Text style={styles.group1Text}>$300</Text>
        <Vi
        <MainButton style={styles.btn} text={styles.text}>
          See More
        </MainButton>
        <Text style={styles.group1Text}>23/24/2024</Text>
      </View>
    </View>
  );
}

export default OrderScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Dimensions.get("window").scale * 4,
    gap: 40,
  },
  orderTitle: {
    fontSize: Dimensions.get("window").fontScale * 20,
  },
  group1: {
    padding: Dimensions.get("window").scale * 4,
    flexDirection: "row",
    height: Dimensions.get("window").height / 10,
    backgroundColor: "brown",
    borderRadius: 20,
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  group1Text: {
    fontSize: Dimensions.get("window").fontScale * 20,
    color: "white"
  },
  btn: {
    backgroundColor: "blue",
    padding: Dimensions.get("window").scale * 2,
    width: Dimensions.get("window").width / 3,
    alignSelf: "flex-end"
  },
  text: {
    fontSize: Dimensions.get("window").fontScale * 10,
    color: "white",
  },
});