import React, { Fragment, useState } from 'react'

import { Dimensions, FlatList, Modal, ScrollView, StyleSheet, Text, View } from 'react-native'

import { useSelector } from 'react-redux'
import MainButton from '../../components/MainButton.android'
import CartItem from '../../components/CartItem'

const OrderScreen = () => {
  const { orderItems } = useSelector((state) => state.shop);


  const orderList = (itemData) => {
    return <List data={itemData.item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.orderTitle}>
        Number Of Order: {orderItems.length}
      </Text>
      <FlatList data={orderItems} renderItem={orderList} showsVerticalScrollIndicator={false}/>
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
});