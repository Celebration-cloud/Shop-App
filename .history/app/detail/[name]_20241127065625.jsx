import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const DetailScreen = () => {
  const {name} = useLocalSearchParams
  return (
    <View>
      <Stack.Screen options={{title: {}}}
      <Text>DetailScreen</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})