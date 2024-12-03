import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const MenuCart = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={props.onPress}>
        <View className=''>
        <Ionicons name="cart-outline" size={25} />
        <View
    </View>
      </TouchableOpacity>
  );
}

export default MenuCart

const styles = StyleSheet.create({})