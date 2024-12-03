import React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'

const MenuBar = () => {
  const navigation = useNavigation()
  const handleMenu = () => {
    navigation.openDrawer();
  };
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={handleMenu}>
      <Ionicons name="menu-sharp" size={25} />
    </TouchableOpacity>
  );
}

export default MenuBar

const styles = StyleSheet.create({})