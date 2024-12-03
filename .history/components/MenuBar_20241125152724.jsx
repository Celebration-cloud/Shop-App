import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const MenuBar = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>

    <View>
      <Text>MenuBar</Text>
    </View>
    </TouchableOpacity>
  )
}

export default MenuBar

const styles = StyleSheet.create({})