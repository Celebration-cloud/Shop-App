import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainButton from "../components/MainButton.android"
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from 'react-redux';
const CartScreen = () => {
  const { loading, cartItems} = useSelector(state => state.shop)
  const totalPerItem = cartItems.reduce((previous, current) => {
    if (!previous[current.name]) {
      previous[current.name] = 0;
    }
    previous[current.name] += current.price * current.count;
    return previous;
  }, {})
  const totalSum = cartItems.reduce((previous, current) => {
    if(previous.length < 1){
      previous = 0
    }
    previous += current.pr
  }, 0)
  console.log(totalPerItem)
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.total}>Total Sum: </Text>
        <MainButton style={styles.btn} text={styles.text} onPress={() => {}}>
          ORDER
        </MainButton>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.item} className="bg-yellow-700">
          <Text style={styles.itemText} className="text-slate-200">
            {3}x
          </Text>
          <Text style={styles.itemText} className="text-slate-200">
            Saddler
          </Text>
          <Text style={styles.itemText} className="text-slate-200">
            ${36}
          </Text>
          <MainButton className="bg-red-500" style={styles.deleteBtn}>
            <Ionicons name="trash-bin-outline" size={25} />
          </MainButton>
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
    paddingHorizontal: 20,
    gap: 20,
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
    backgroundColor: "blue",
    padding: Dimensions.get("window").scale * 4,
    width: Dimensions.get("window").width / 3,
  },
  text: {
    fontSize: Dimensions.get("window").fontScale * 20,
    color: "white",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    padding: Dimensions.get("window").scale * 5,
    borderRadius: 30,
    elevation: 8
  },
  itemText: {
    fontSize: Dimensions.get("window").fontScale * 20,
  },
  deleteBtn: {
    padding: Dimensions.get("window").scale * 4,
    width: Dimensions.get("window").width / 6,
  },
});