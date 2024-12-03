import React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'

const MenuIcon = (props) => {
  const navigation = useNavigation()
  
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={props.}>
      {props.children}
    </TouchableOpacity>
  );
}

export default MenuIcon

const styles = StyleSheet.create({})