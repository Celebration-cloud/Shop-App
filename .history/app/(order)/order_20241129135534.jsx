import React, { useState } from 'react'

import { Dimensions, FlatList, Modal, StyleSheet, Text, View } from 'react-native'

import { useSelector } from 'react-redux'
import MainButton from '../../components/MainButton.android'
import CartItem from '../../components/CartItem'

const OrderScreen = () => {
  const [visible, setVisible] = useState(true);
  const { orderItems } = useSelector((state) => state.shop);


  const List = ({ data }) => {
    const handleSeeMore = () => {
      console.log(data.cartItems);
    };
    return (
      <View style={styles.group1}>
        <Text style={styles.group1Text}>${data.totalSum.toFixed(2)}</Text>
        <View style={styles.btnContainer}>
          <MainButton
            onPress={handleSeeMore}
            style={styles.btn}
            text={styles.text}
          >
            See More
          </MainButton>
        </View>

        <Text style={styles.group1Text}>23/24/2024</Text>
      </View>
    );
  };

  const orderList = (itemData) => {
    const { cartItems, id, data } = itemData.item;
    const totalPerItem = cartItems.reduce((previous, current) => {
      if (!previous[current.name]) {
        previous[current.name] = 0;
      }
      previous[current.name] += current.price * current.count;
      return previous;
    }, {});

    console.log(cartItems);
    return (
      <View>
        <List data={itemData.item} />
        <View style={styles.modalContainer}>
          <Modal style={styles.modal} b visible={visible}>
            {cartItems?.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                totalPerItem={totalPerItem}
                onPress={() => handleDelete(item.id)}
              />
            ))}
          </Modal>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.orderTitle}>
        Number Of Order: {orderItems.length}
      </Text>
      <FlatList data={orderItems} renderItem={orderList} />
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
    marginVertical: 20,
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
  modalContainer: {
    position: "relative",
    width: Dimensions.get("window").width / 4,
    height: Dimensions.get("window").height / 40,
    justifyContent: "center",
    alignContent: "center",
  },
  modal: {
    width: Dimensions.get("window").width / 6,
    height: Dimensions.get("window").height / 40,
  },
});