import React, { useEffect } from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'
import { useDispatch } from 'react-redux'

const AuthLayout = () => {
  const dispatch = useDispatch()
  useEffect(() => {

  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarBackgroundColor: "lightgreen",
      }}
      initialRouteName="index"
    >
      <Stack.Screen name="index" options={{animation: "fade"}} />
      <Stack.Screen name="signUp" />
    </Stack>
  );
}

export default AuthLayout

const styles = StyleSheet.create({})