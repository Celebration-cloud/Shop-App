import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarBackgroundColor: "lightgreen",
      }}
      initialRouteName="index"
    >
      <Stack.Screen name="index" options={{animation}} />
      <Stack.Screen name="signUp" />
    </Stack>
  );
}

export default AuthLayout

const styles = StyleSheet.create({})