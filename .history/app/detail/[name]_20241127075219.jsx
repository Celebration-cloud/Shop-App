import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const DetailScreen = () => {
  const {id, name, imageUrl, description,  category, price} = useLocalSearchParams()
  return (
    <View>
      <Stack.Screen options={{title: name}}/>
      <Image source={{uri: imageUrl}} />
      <Text>${price}</Text>
      <Text><Text></Text>{category}</Text>
      <Text>{description}</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10
  }
})