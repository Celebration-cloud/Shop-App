import { Stack, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'

import { StyleSheet, Text, View } from 'react-native'

const EditOrAddScreen = (props) => {
  const {slug, data} = useLocalSearchParams()
  const [addProduct, setAddProduct] = useState
  return (
    <View>
      <Stack.Screen options={{title: slug}}/>
      <Text>EditOrAddScreen</Text>
    </View>
  )
}

export default EditOrAddScreen

const styles = StyleSheet.create({})