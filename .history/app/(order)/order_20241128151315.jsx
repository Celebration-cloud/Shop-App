import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderScreen = () => {
  const { loading, error, reducerKey} = useSelector(state => state.storeKey)
  return (
    <View>
      <Text>OrderScreen</Text>
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})