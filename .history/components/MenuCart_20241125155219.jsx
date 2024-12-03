import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const MenuCart = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <Ionicons name="car" size={25} />
    </TouchableOpacity>
  );
}

export default MenuCart

const styles = StyleSheet.create({})