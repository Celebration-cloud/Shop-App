import React from 'react'

import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'

import { useNavigation } from 'expo-router'

const MenuIcon = (props) => {
  const navigation = useNavigation()
  
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
}

export default MenuIcon