import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MenuAddProduct = () => {
  const handleAddProduct = () => {
    console.log("add")
  };
  return (
    <TouchableOpacit activeOpacity={0.3} onPress={handleAddProduct}>
      <Ionicons name="" size={25} />
    </TouchableOpacit>
  );
}

export default MenuAddProduct

const styles = StyleSheet.create({})