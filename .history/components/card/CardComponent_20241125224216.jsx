import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from "@/components/ui/card";
const captionSide: ardComponent = (props) => {
  return (
    <Card>
      <Image source={{uri: props.}}/>
    </Card>
  )
}

export default captionSide: ardComponent

const styles = StyleSheet.create({})