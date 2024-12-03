import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const MenuCart = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <Ionicons name="cart-outline" size={25} />
    </TouchableOpacity>
  );
}

export default MenuCart

const styles = StyleSheet.create({})