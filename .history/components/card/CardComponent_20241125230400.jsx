import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const cardComponent = (props) => {
  const Color = useCo
  return (
    <View>
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