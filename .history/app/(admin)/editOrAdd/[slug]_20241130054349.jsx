import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

const EditOrAddScreen = (props) => {
  const {slug, d} = useLocalSearchParams()
  
  
  return (
    <View>
      <Stack.Screen options={{title: slug}}/>
      <Text>EditOrAddScreen</Text>
    </View>
  )
}

export default EditOrAddScreen

const styles = StyleSheet.create({})