import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MenuDone = () => {
    const handleDone = () => { 

     };
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={handleDone}>
      {props.children}
    </TouchableOpacity>
  );
}

export default MenuDone

const styles = StyleSheet.create({})