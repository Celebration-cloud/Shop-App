import { Stack } from 'expo-router'
import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

const EditOrAddScreen = (props) => {
  console.log(props.title)
  return (
    <View>
      <Stack.Screen options={{title: props.title}}/>
      <Text>EditOrAddScreen</Text>
    </View>
  )
}

export default EditOrAddScreen

const styles = StyleSheet.create({})