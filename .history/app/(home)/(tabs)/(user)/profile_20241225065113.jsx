import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import MainButton from "../../../../components/MainButton"

const ProfileScreen = () => {
  const dispatch = useDis
  const handleLogout = () => { 
    console.log('Logout button pressed')

   };
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <MainButton style={{padding: 10, backgroundColor: "blue"}} text={{color: "white", fontSize: 10}}>
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