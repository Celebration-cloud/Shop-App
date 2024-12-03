import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from "@/components/ui/card";
const cardComponent = (props) => {
  return (
    <>
      <Image source={{uri: props.image}}/>
      gs-Alert
    </>
  )
}

export default cardComponent

const styles = StyleSheet.create({})