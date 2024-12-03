import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useSelector } from 'react-redux';

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
    height: Dimensions.get("window").height / 26
  },
  cartNum: {
    padding: Dimensions.get("window").scale * 1.5,
    marginTop: 15,
    marginLeft: 20,
    width: Dimensions.get("window").width / 15,
    height: Dimensions.get("window").height / 36,
    position: "absolute",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.dark.text,
    marginBottom: 10,
    textAlign: "center",
    fontSize: 14
  }
})