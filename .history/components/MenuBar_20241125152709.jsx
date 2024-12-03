import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const MenuBar = (props) => {
  return (
    <TouchableOpacity onPress={props.}>

    <View>
      <Text>MenuBar</Text>
    </View>
    </TouchableOpacity>
  )
}

export default MenuBar

const styles = StyleSheet.create({})