import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const MenuCart = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={props.onPress}>
      <View className="flex-row w-full h-full">
        <Ionicons name="cart-outline" size={35} />

        <Text className='p-1 bg0'>10</Text>
      </View>
    </TouchableOpacity>
  );
}

export default MenuCart

const styles = StyleSheet.create({

})