import React, { useState } from 'react'

import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'

import { useSelector } from 'react-redux'
import MainButton from '../../components/MainButton.android'

const OrderScreen = () => {
  const [visible, setVisible] = useState()
  const { orderItems } = useSelector(state => state.shop)
  console.log(orderItems)

  const List = ({}) => { 

    return (
      <View style={styles.group1}>
        <Text style={styles.group1Text}>$300</Text>
        <View style={styles.btnContainer}>
          <MainButton style={styles.btn} text={styles.text}>
            See More
          </MainButton>
        </View>

        <Text style={styles.group1Text}>23/24/2024</Text>
      </View>
    );
   };

  const orderList = (itemData) => { 
    return <List data={itemData.item}/>
   };

  return (
    <View style={styles.container}>
      <Text style={styles.orderTitle}>
        Number Of Order: {orderItems.length}
      </Text>
      <FlatList d/>
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
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  group1Text: {
    fontSize: Dimensions.get("window").fontScale * 20,
    color: "white",
    width: Dimensions.get("window").width / 4,
  },
  btnContainer: {
    alignSelf: "flex-end",
    width: Dimensions.get("window").width / 4,
  },
  btn: {
    backgroundColor: "blue",
    padding: Dimensions.get("window").scale * 2,
    width: Dimensions.get("window").width / 3,
    alignSelf: "flex-end",
  },
  text: {
    fontSize: Dimensions.get("window").fontScale * 20,
    color: "white",
  },
});