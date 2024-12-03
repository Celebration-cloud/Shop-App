import React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'

const MenuI = (props) => {
  const navigation = useNavigation()
  
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={props.handleMenu}>
      {props.children}
    </TouchableOpacity>
  );
}

export default MenuI

const styles = StyleSheet.create({})