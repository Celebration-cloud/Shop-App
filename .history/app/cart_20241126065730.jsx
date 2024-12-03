import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainButton from "../components/MainButton.android"
const CartScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.total}>Total Sum: </Text>
        <MainButton style={styles.btn} text={styles.text} onPress={() => {}}>
          ORDER
        </MainButton>
      </View>
      <View></View>
    </View>
  );
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    head: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    total: {
        fontSize: Dimensions.get
    }
})