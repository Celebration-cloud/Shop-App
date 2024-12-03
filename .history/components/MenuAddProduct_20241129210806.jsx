import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MenuAddProduct = () => {
  const handleAdd = () => {
    console.log("add")
  };
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={handleAdd}>
      <Ionicons name="menu-sharp" size={25} />
    </TouchableOpacity>
  );
}

export default MenuAddProduct

const styles = StyleSheet.create({})