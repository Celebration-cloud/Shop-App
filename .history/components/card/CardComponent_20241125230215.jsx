import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const cardComponent = (props) => {
  return (
    <View>
      <Image source={{uri: props.image}}/>
      <View>
        <Button title={props.buttonLeft}/>
        <Button title={props.buttonRight} onPress={props.onPressR}/>
      </View>
    </View>
  )
}

export default cardComponent

const styles = StyleSheet.create({})