import React from 'react'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { useRouter } from 'expo-router';

const MenuAddProduct = (props) => {
  const router = useRouter()
  const handleAddProduct = () => {
    console.log("add")
    router.navigate({pathname: "editOrAdd/[slug]", params:})
  };
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={handleAddProduct}>
      {props.children}
    </TouchableOpacity>
  );
}

export default MenuAddProduct

const styles = StyleSheet.create({})