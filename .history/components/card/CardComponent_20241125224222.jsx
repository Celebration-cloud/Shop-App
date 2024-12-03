import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from "@/components/ui/card";
const ardComponent = (props) => {
  return (
    <Card>
      <Image source={{uri: props.}}/>
    </Card>
  )
}

export default ardComponent

const styles = StyleSheet.create({})