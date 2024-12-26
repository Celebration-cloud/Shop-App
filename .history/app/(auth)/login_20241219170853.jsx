import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { BottomTabBarHeightCallbackContext } from '@react-navigation/bottom-tabs';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            resizeMode="cover"
            source={require("../../assets/images/shop-app-logo.png")}
            style={{position: "relative", width: "100%", height: "100%"}}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>
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
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  content: {
    width: "70%",
    height: "70%",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    gap: 5,
  },
  logoContainer: {
    borderRadius: 30,
    width: "50%",
    height: "30%",
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
  },
  formContainer: {
    alignItems: "center",
    gap: 5,
    justifyContent: "center",
  },
  title: {
    
  },
});