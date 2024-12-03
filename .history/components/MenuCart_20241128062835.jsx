import React from 'react'

import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import { Colors } from '@/constants/Colors';

const MenuCart = (props) => {
  const {cartItems} = useSelector(state => state.shop)
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={props.onPress}>
      <View style={styles.container}>
        <Ionicons name="cart-outline" size={35} />
        <View style={styles.cartNum} className='bg-background-800 p-1'>

        <Text style={styles.text}>{cartItems.length}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default MenuCart

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 10,
    height: Dimensions.get("window").height / 26,
  },
  cartNum: {
    marginTop: 15,
    marginLeft: 20,
    width: Dimensions.get("window").width / 15,
    height: Dimensions.get("window").height / 35,
    position: "absolute",
    borderRadius: 100,
    justifyContent: "center",
    backgroundColor: Colors.dark.icon
    alignItems: "center",
  },
  text: {
    color: Colors.dark.text,
    textAlign: "center",
    fontSize: 14,
  },
});