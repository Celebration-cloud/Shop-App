import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const MenuCart = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={props.onPress}>
      <View className="flex-row w-full h-full">
        <Ionicons name="cart-outline" size={35} />

        <Text style={{...styles.text}}>10</Text>
      </View>
    </TouchableOpacity>
  );
}

export default MenuCart

const styles = StyleSheet.create({
  text: {
    padding: 2,
    backgroundColor:
  }
})