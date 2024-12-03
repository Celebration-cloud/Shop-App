import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const cardComponent = (props) => {
  return (
    <View>
      <Image source={{uri: props.image}}/>
      <View>
        <Butt
      </View>
    </View>
  )
}

export default cardComponent

const styles = StyleSheet.create({})