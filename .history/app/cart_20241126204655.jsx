import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainButton from "../components/MainButton.android"
import { ScrollView } from 'react-native-web';
const CartScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.total}>Total Sum: </Text>
        <MainButton style={styles.btn} text={styles.text} onPress={() => {}}>
          ORDER
        </MainButton>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View>
          <Text>{3}x</Text>
          <Text>San</Text>
        </View>
      </ScrollView>
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
    fontSize: Dimensions.get("window").fontScale * 20,
    width: Dimensions.get("window").width / 2,
  },
  btn: {
    backgroundColor: "red",
    padding: Dimensions.get("window").scale * 4,
    width: Dimensions.get("window").width / 3,
  },
  text: {
    fontSize: Dimensions.get("window").fontScale * 20,
  },

});