import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useColorScheme } from 'react-native';
const cardComponent = (props) => {
  const Color = useColorScheme()
  return (
    <View style={}>
      <Image source={{ uri: props.image }} />
      <View>
        <Button title={props.buttonLeft} onPress={props.onPressLeft} />
        <Text>{props.text}</Text>
        <Button title={props.buttonRight} onPress={props.onPressRight} />
      </View>
    </View>
  );
}

export default cardComponent

const styles = StyleSheet.create({
  
})