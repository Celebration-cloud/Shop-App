import React from 'react'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const MenuDone = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={propsonPress}>
      {props.children}
    </TouchableOpacity>
  );
}

export default MenuDone

const styles = StyleSheet.create({})