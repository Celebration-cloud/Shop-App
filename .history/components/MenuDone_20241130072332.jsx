import React from 'react'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const MenuDone = ({onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={onPress}>
      {props.children}
    </TouchableOpacity>
  );
}

export default MenuDone

const styles = StyleSheet.create({})