import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useColorScheme } from 'react-native';
import {Colors} from "../../constants/Colors"

const List = ({data}) => {
  const ColorMode = useColorScheme()
  const handleDetails = () => { `details: ${console.log(data) }`};
  const handleCarts = () => {  `details: ${console.log(data)}` };
  return (
    <View className={`gap-x-10 bg-slate-400  `}>
      <View className={`w-full h-30`}>
        <Image source={{ uri: data.image }} className={`w-full h-20`}/>
      </View>
      <View className={`flex-row gap-2`}>
        <View className={`w-20 rounded-sm p-4 `}>
          <Button
            title="Details"
            onPress={handleDetails}
            color={ColorMode === "dark" ? Colors.dark.tint : Colors.light.tint}
          />
        </View>
        <Text>{data.text}</Text>
        <View className={`w-20 rounded-sm p-4 `}>
          <Button
            title="Cart"
            onPress={handleCarts}
            color={ColorMode === "dark" ? Colors.dark.tint : Colors.light.tint}
          />
        </View>
      </View>
    </View>
  );
}
const cardComponent = (itemData) => {
  return <List data={itemData.item}/>
}

export default cardComponent