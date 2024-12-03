import React from 'react'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons';

const MenuAddProduct = (props) => {
  const handleAddProduct = () => {
    console.log("add")
  };
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={handleAddProduct}>
      {props.children}
    </TouchableOpacity>
  );
}

export default MenuAddProduct

const styles = StyleSheet.create({})