import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from "@/components/ui/card";
const CardComponent = () => {
  return (
    <Card>
      <Image source={{ima}}/>
    </Card>
  )
}

export default CardComponent

const styles = StyleSheet.create({})