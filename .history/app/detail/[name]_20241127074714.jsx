import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const DetailScreen = () => {
  const {id, name, imageUrl, description,  category, price} = useLocalSearchParams()
  return (
    <View>
      <Stack.Screen options={{title: name}}/>
      <Image source={{uri: ima}}/>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})