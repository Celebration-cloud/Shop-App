import React, { Fragment, useState } from "react";

import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

import CartItem from "./CartItem";
import MainButton from "./MainButton.android";

const OrderList = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const totalPerItem = data.cart?.reduce((previous, current) => {
    if (!previous[current.name]) {
      previous[current.name] = 0;
    }
    previous[current.name] += current.price * current.count;
    return previous;
  }, {});

  const handleSeeMore = () => {
    setVisible((prev) => !prev);
  };
  return (
    <Fragment>
      <View style={styles.group1}>
        <Text style={styles.group1Text}>${data?.totalSum.toFixed(2)}</Text>
        <View style={styles.btnContainer}>
          <MainButton
            onPress={handleSeeMore}
            style={styles.btn}
            text={styles.text}
          >
            {visible "See More"}
          </MainButton>
        </View>

        <Text style={styles.group1Text}>23/24/2024</Text>
      </View>
      {visible && (
        <View style={styles.modalContainer}>
          <ScrollView
            contentContainerStyle={styles.scroll}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.id}>Order Id: {data.id}</Text>
            <View style={styles.modal}>
              {data.cart?.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  totalPerItem={totalPerItem}
                  noDelete={true}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      )}
    </Fragment>
  );
};

export default OrderList;

const styles = StyleSheet.create({
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
  scroll: {
    overflow: "hidden",
    padding: Dimensions.get("window").scale * 5,
  },
  modalContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 10,
    height: Dimensions.get("window").height / 5,
  },
  modal: {
    width: Dimensions.get("window").width / 1.3,
  },
  id: {
    color: "white",
    textAlign: "center",
    fontSize: Dimensions.get("window").fontScale * 20,
  },
});