import React, { useCallback, useEffect } from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'
import { useDispatch } from 'react-redux'
import { sessionAction } from '../../store/actions/authActions'

const AuthLayout = () => {
  const dispatch = useDispatch()
  const handleSession = useCallback(
    () => {
      dispatch(sessionAction());
    },
    [dispatch],
  )
  
  useEffect(() => {
    dispatch(sessionAction());
  }, [dis]);

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