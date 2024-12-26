import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack ta>
        <Stack.Screen name='login' options={{headerShown: false}}/> 
        <Stack.Screen name='signUp' options={{headerShown: false}}/> 
    </Stack>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})