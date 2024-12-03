import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

const MenuCart = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={props.onPress}>
      <View style={styles.container}>
        <Ionicons name="cart-outline" size={35} />
        <View style={styles.cartNum}>

        <Text style={styles.text} className='text'>10</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default MenuCart

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 10,
    height: Dimensions.get("window").height / 30
  },
  cartNum: {
    padding: Dimensions.get("window").scale * 1,
    marginTop: 15,
    marginLeft: 20,
    position: "absolute",
    backgroundColor: Colors.dark.icon,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.dark.text
  }
})