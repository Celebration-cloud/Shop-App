import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from "@/components/ui/card";
const cardComponent = (props) => {
  return (
    <Card>
      <Image source={{uri: props.image}}/>
      <div
        className="grid grid-cols- gap-"
        aria-label="layout-grid-equals"
      >
        
      </div>
    </Card>
  )
}

export default cardComponent

const styles = StyleSheet.create({})