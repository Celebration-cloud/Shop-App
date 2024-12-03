import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainButton from "../components/MainButton.android"
const CartScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.head}>

      <Text >Total Sum: </Text>
      <MainButton style={styles.btn} onPress={() => {}}>ORDER</MainButton>
        </View>
        <View>

        </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({

})