import React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'

const MenuBar = (props) => {
  const navigation = useNavigation()
  
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={props.handleMenu}>
      <Ionicons name="menu-sharp" size={25} />
    </TouchableOpacity>
  );
}

export default MenuBar

const styles = StyleSheet.create({})