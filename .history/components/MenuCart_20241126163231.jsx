import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const MenuCart = (props) => {
  return (
    <View>

    <TouchableOpacity cont activeOpacity={0.3} onPress={props.onPress}>
      <Ionicons name="cart-outline" size={25} />
    </TouchableOpacity>
    </View>
  );
}

export default MenuCart

const styles = StyleSheet.create({})