import React, { useCallback, useEffect } from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Stack, useLocalSearchParams } from 'expo-router'
import { useDispatch } from 'react-redux'
import { sessionAction } from '../../store/actions/authActions'

const AuthLayout = () => {
  const dispatch = useDispatch()
  const {logout} = useLocalSearchParams()
  // const handleSession = useCallback(
  //   () => {
  //     dispatch(sessionAction());
  //   },
  //   [dispatch],
  // )
  {!logout }
  useEffect(() => {
    dispatch(sessionAction());
  }, [dispatch]);

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