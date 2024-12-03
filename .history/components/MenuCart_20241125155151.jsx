import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MenuCart = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <Ionicons name="menu-sharp" size={25} />
    </TouchableOpacity>
  );
}

export default MenuCart

const styles = StyleSheet.create({})