import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useColorScheme } from 'react-native';
impor
const cardComponent = (props) => {
  const ColorMode = useColorScheme()
  return (
    <View className={`gap-4 bg-slate-400 `}>
      <View className={`w-full h-3/4`}>
        <Image source={{ uri: props.image }} />
      </View>
      <View className={`flex-row gap-2`}>
        <View className={`w-20 rounded-sm p-4 `}>
          <Button title={props.buttonLeft} onPress={props.onPressLeft} color={ColorMode === "dark" ? Colors} />
        </View>
        <Text>{props.text}</Text>
        <View className={`w-20 rounded-sm p-4 `}>
          <Button title={props.buttonRight} onPress={props.onPressRight} />
        </View>
      </View>
    </View>
  );
}

export default cardComponent