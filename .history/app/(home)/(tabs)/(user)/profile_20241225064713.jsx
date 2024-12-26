import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <MainButton style={{paddin}}>
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