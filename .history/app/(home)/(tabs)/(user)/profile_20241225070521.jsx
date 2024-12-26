import React, { useEffect } from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { useRouter } from 'expo-router'

import { useDispatch, useSelector } from 'react-redux'

import MainButton from "../../../../components/MainButton"
import { logoutAction } from '../../../../store/actions/authActions'

const ProfileScreen = () => {
  const dispatch = useDispatch()
  const router = useRouter()
    const { user, isAuth, token } = useSelector((state) => state.user);
      useEffect(() => {
        if (!isAuth && token === null) {
          router.replace({
            pathname: "(auth)",
            params: { session: `logged out Successfully` },
          });
        }
      }, [isAuth, token]);
  const handleLogout = () => { 
    console.log('Logout button pressed')
dispatch(logoutAction())
   };
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <MainButton onPress{} style={{padding: 10, backgroundColor: "blue"}} text={{color: "white", fontSize: 10}}>
        Logout
      </MainButton>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    gap: 20,
  },
})