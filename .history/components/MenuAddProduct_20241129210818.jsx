import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MenuAddProduct = () => {
  const handleAddProduct = () => {
    console.log("add")
  };
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={handleAddProduct}>
      <Ionicons name="a" size={25} />
    </TouchableOpacity>
  );
}

export default MenuAddProduct

const styles = StyleSheet.create({})