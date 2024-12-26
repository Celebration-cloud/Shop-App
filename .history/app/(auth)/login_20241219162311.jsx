import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View>
      <View>
        <View>
          <Image source={require("../../assets/images/shop-app-logo.png")} />
        </View>

        <Text>Login</Text>
      </View>
    </View>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: "center",
    flex: 1
  },
  content: {
    width: Dimensions.get("window").width / 3,
  },

})