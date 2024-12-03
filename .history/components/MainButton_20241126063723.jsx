import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableNativeFeedback } from 'react-native-web'

const MainButton = (onPress) => {
  return (
    <View>
        <TouchableNativeFeedback onPress={on}>

        </TouchableNativeFeedback>
      <Text>MainButton</Text>
    </View>
  )
}

export default MainButton

const styles = StyleSheet.create({})