import React from 'react'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const MenuDone = ({onp}) => {
    const handleDone = () => { 

     };
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={handleDone}>
      {props.children}
    </TouchableOpacity>
  );
}

export default MenuDone

const styles = StyleSheet.create({})