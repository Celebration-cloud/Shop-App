import React from 'react'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const MenuDone = ({onPress}) => {
    const handleDone = () => { 

     };
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={on}>
      {props.children}
    </TouchableOpacity>
  );
}

export default MenuDone

const styles = StyleSheet.create({})