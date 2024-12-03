import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainButton from "../components/MainButton.android"
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import {removeCartItem}
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
  const handleDelete = (id) => { 
    const removeItem = cartItems.find(item => item.id !== id)
    
    console.log(id, removeItem)
   };
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
          <CartItem key={item.id} item={item} totalPerItem={totalPerItem} onPress={() => handleDelete(item.id)}/>
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
});