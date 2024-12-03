import React from 'react'

import { TouchableOpacity } from 'react-native'

import { useNavigation } from 'expo-router'

const MenuIcon = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
}

export default MenuIcon