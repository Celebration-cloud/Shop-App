import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainButton from './MainButton.android';
import { Ionicons } from '@expo/vector-icons';

const CartItem = (props) => {

  return (
    <View key={props.item.id} style={styles.item} className="bg-yellow-700">
      <Text style={styles.itemText} className="text-slate-200">
        {props.item.count}x
      </Text>
      <Text style={styles.itemText} className="text-slate-200">
        {props.item.name.slice(0, 10) + "..."}
      </Text>
      <Text style={styles.itemText} className="text-slate-200">
        ${props.totalPerItem[props.item.name].toFixed(2)}
      </Text>
      <MainButton className="bg-red-500" onPress={props.onPress} style={styles.deleteBtn}>
        <Ionicons name="trash-bin-outline" size={25} color="white" />
      </MainButton>
    </View>
  );
}

export default CartItem

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    padding: Dimensions.get("window").scale * 5,
    borderRadius: 30,
    elevation: 8,
    backgroundColor: "brown",
  },
  itemText: {
    fontSize: Dimensions.get("window").fontScale * 18,
    color: "white",
  },
  deleteBtn: {
    padding: Dimensions.get("window").scale * 4,
    width: Dimensions.get("window").width / 6,
    backgroundColor: "dred",
  },
});