import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const DetailScreen = () => {
  const {id, name, imageUrl, description,  category, price} = useLocalSearchParams()
  return (
    <View>
      <Stack.Screen name={`detail/${name}`} options={{title: {name}}}/>
      <Text>DetailScreen</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})