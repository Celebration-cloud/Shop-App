import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from "@/components/ui/card";
const cardComponent = (props) => {
  return (
    <View>
      <Image source={{uri: props.image}}/>
      <V
    </View>
  )
}

export default cardComponent

const styles = StyleSheet.create({})