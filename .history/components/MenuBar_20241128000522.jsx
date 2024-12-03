import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const MenuBar = (props) => {
  cons
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={() => }>
      <Ionicons name="menu-sharp" size={25} />
    </TouchableOpacity>
  );
}

export default MenuBar

const styles = StyleSheet.create({})