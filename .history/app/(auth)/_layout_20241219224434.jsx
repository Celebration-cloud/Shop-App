import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack initialRouteName="index">
        <Stack.Screen name='index' options={{headerShown: false}}/> 
        <Stack.Screen name='signUp' options={{headerShown: false, headerStyle: {ba}}}/> 
    </Stack>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})