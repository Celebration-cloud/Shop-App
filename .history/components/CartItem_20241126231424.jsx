import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainButton from './MainButton.android';
import { Ionicons } from '@expo/vector-icons';

const CartItem = (props) => {
  return (
    <View key={item.id} style={styles.item} className="bg-yellow-700">
      <Text style={styles.itemText} className="text-slate-200">
        {item.count}x
      </Text>
      <Text style={styles.itemText} className="text-slate-200">
        {item.name.slice(0, 10) + "..."}
      </Text>
      <Text style={styles.itemText} className="text-slate-200">
        ${totalPerItem[item.name]}
      </Text>
      <MainButton className="bg-red-500" style={styles.deleteBtn}>
        <Ionicons name="trash-bin-outline" size={25} />
      </MainButton>
    </View>
  );
}

export default CartItem

const styles = StyleSheet.create({})