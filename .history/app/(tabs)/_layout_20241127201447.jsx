import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name='(shop)' options={{title: "Shop"}}/>
      <Tabs.Screen name='(user)' options={{title: "Shop"}}/>
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})