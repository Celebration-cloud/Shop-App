import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainButton from "../components/MainButton.android"
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
const CartScreen = () => {
  const { loading, cartItems} = useSelector(state => state.shop)
  const totalPerItem = cartItems.reduce((previous, current) => {
    if (!previous[current.name]) {
      previous[current.name] = 0;
    }
    previous[current.name] += current.price * current.count;
    return previous;
  }, {})
  const totalSum = cartItems.reduce((previous, current) => {
    if(cartItems.length < 1){
      previous = 0
    }
    return previous + current.price * current.count;
  }, 0)
  const handleD = () => {  };
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.total}>Total Sum: ${totalSum}</Text>
        <MainButton style={styles.btn} text={styles.text} onPress={() => {}}>
          ORDER
        </MainButton>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        {cartItems.length > 0 && cartItems.map((item) => (
          <CartItem key={item.id} item={item} totalPerItem={totalPerItem}/>
        ))}
        {cartItems.length < 1 && (
          <View style={styles.noCartContainer}>
            <Text style={styles.noCart}>No Items Added to Cart</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default CartScreen

const styles = StyleSheet.create({
  noCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noCart: {
    fontSize: Dimensions.get("window").fontScale * 25,
  },
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 20,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  total: {
    fontSize: Dimensions.get("window").fontScale * 20,
    width: Dimensions.get("window").width / 2,
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
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    padding: Dimensions.get("window").scale * 5,
    borderRadius: 30,
    elevation: 8
  },
  itemText: {
    fontSize: Dimensions.get("window").fontScale * 20,
  },
  deleteBtn: {
    padding: Dimensions.get("window").scale * 4,
    width: Dimensions.get("window").width / 6,
  },
});