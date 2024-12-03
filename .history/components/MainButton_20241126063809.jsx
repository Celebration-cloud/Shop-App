import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableNativeFeedback } from 'react-native'

const MainButton = (onPress) => {
  return (
    <View>
        <TouchableNativeFeedback onPress={onPress}>
            <View
        </TouchableNativeFeedback>
      <Text>MainButton</Text>
    </View>
  )
}

export default MainButton

const styles = StyleSheet.create({})