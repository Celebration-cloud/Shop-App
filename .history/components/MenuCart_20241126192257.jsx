import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const MenuCart = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={props.onPress}>
      <View className="flex-row w-full h-full">
        <Ionicons name="cart-outline" size={35} />

        <View className="bg-slate-500 p-3 rounded-full w-4 h-5 justify-center items-center">
          <Text className="text-slate-100 text-base text-center">10</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default MenuCart

const styles = StyleSheet.create({
})