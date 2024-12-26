import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* <View style={styles.logoContainer}>
          <Image
            resizeMode="contain"
            source={require("../../assets/images/shop-app-logo.png")}
            width={50}
            height={50}
          />
        </View> */}
        <View>
          <Text>Login</Text>
          <View>
            <Text>Email</Text>
            <TextInput style={styles.input} />
            <Text>Password</Text>
            <TextInput style={styles.input} />
          </View>
        </View>
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
  // content: {
  //   width: "50%",
  //   height: "70%",
  //   justifyContent: 'center',
  //   gap: 5
  // },
  logoContainer: {
    borderRadius: 20,
    width: 30,
    borderWidth
    height: 20
  },

})