import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useColorScheme } from 'react-native';
const cardComponent = (props) => {
  const Color = useColorScheme()
  return (
    <View className={`gap-4 bg-slate-400 `}>
      <View className={`w-full h-3/4`}>

      <Image source={{ uri: props.image }} />
      </View>
      <View className={`flex-row gap-2 `}>
        <View >

        </View>
        <Button title={props.buttonLeft} onPress={props.onPressLeft} />
        <Text>{props.text}</Text>
        <Button title={props.buttonRight} onPress={props.onPressRight} />
      </View>
    </View>
  );
}

export default cardComponent