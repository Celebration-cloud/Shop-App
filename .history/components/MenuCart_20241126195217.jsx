import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

const MenuCart = (props) => {
  const { loading, error, cartItems} = useSelector(state => state.storeKey)
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={props.onPress}>
      <View style={styles.container}>
        <Ionicons name="cart-outline" size={35} />
        <View style={styles.cartNum} className='bg-background-800 p-1'>

        <Text style={styles.text}>10</Text>
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
    position: "absolute",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.dark.text,
    fontSize: 14
  }
})