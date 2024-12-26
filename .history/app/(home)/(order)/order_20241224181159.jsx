import React from 'react'

import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'

import { useSelector } from 'react-redux'

import LoadingScreen from "../../../components/LoadingScreen"
import OrderList from '../../../components/OrderList'

const OrderScreen = () => {
  const { orderItems } = useSelector((state) => state.shop);

  const orderList = (itemData) => {
    return <OrderList data={itemData.item} />;
  };


  return (
    <View style={styles.container}>
<LoadingScreen />
      <Text style={styles.orderTitle}>
        Number Of Order: {orderItems.length}
      </Text>
      {orderItems.length < 1 && (
        <Text
      )}
      {orderItems.length > 0 && (

      <FlatList data={orderItems} renderItem={orderList} showsVerticalScrollIndicator={false}/>
      )}
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