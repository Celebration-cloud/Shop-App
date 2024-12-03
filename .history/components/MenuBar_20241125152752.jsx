import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const MenuBar = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>

    <View>
      <Ionicons name='men'/>
    </View>
    </TouchableOpacity>
  )
}

export default MenuBar

const styles = StyleSheet.create({})