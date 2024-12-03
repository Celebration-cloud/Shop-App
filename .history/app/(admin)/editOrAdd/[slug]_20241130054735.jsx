import { Stack, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'

import { StyleSheet, Text, View } from 'react-native'

const EditOrAddScreen = (props) => {
  const {slug, data} = useLocalSearchParams()
  const [addProduct, setAddProduct] = useState({
    name: data.,
    description: data.description,
    price: 99.99,
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1580894748619-b5b3a5cd52f1",
  });
  return (
    <View>
      <Stack.Screen options={{title: slug}}/>
      <Text>EditOrAddScreen</Text>
    </View>
  )
}

export default EditOrAddScreen

const styles = StyleSheet.create({})