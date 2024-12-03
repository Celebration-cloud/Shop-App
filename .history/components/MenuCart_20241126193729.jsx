import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

const MenuCart = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={props.onPress}>
      <View className="flex-row mr-56 w-full h-full">
        <Ionicons name="cart-outline" size={35} />
        <View style={styles.cartNum}>

        <Text style={styles.text}>10</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default MenuCart

const styles = StyleSheet.create({
  cartNum: {
    padding: 2,
    marginTop: 15,
    marginLeft: 20,
    position: "absolute",
    backgroundColor: "",
  },
  text: {
    color: Colors.light.text
  }
})