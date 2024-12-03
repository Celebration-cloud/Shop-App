import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name='(shop)' p/>
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})