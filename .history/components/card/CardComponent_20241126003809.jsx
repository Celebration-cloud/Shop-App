import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useColorScheme } from 'react-native';
import {Colors} from "../../constants/Colors"

const List = ({data}) => {
  const ColorMode = useColorScheme()
  const handleDetails = () => { `${console.log(data) }`};
  const handleCarts = () => { c };
  return (
    <View className={`gap-4 bg-slate-400 `}>
      <View className={`w-full h-3/4`}>
        <Image source={{ uri: data.image }} />
      </View>
      <View className={`flex-row gap-2`}>
        <View className={`w-20 rounded-sm p-4 `}>
          <Button
            title="Details"
            onPress={props.onPressLeft}
            color={ColorMode === "dark" ? Colors.dark.tint : Colors.light.tint}
          />
        </View>
        <Text>{data.text}</Text>
        <View className={`w-20 rounded-sm p-4 `}>
          <Button
            title={props.buttonRight}
            onPress={props.onPressRight}
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