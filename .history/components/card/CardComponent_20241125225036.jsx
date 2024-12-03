import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from "@/components/ui/card";
const cardComponent = (props) => {
  return (
    <Card size="md" variants="">
      <Image source={{uri: props.image}}/>
      
    </Card>
  )
}

export default cardComponent

const styles = StyleSheet.create({})