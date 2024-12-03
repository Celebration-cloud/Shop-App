import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const MenuCart = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={props.onPress}>
        <View className='flex-row'>
        <Ionicons name="cart-outline" size={25} />
        <View className='bg-slate-500 p-4 rounded-full absolute w-5 h-1'>
          <Text className='text-slate-100 text-base'>4</Text>
        </View>
    </View>
      </TouchableOpacity>
  );
}

export default MenuCart

const styles = StyleSheet.create({
})