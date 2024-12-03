import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainButton from "../components/MainButton"
const CartScreen = () => {
  return (
    <View>
        <View>

      <Text>Total Sum: </Text>
      <MainButton onPress={() => {}}>Total Sum</MainButton>
        </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})