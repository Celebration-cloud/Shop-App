import React from 'react'

import { Button, Dimensions, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

import { useRouter } from 'expo-router';
import MainButton from '../../components/MainButton';

const LoginScreen = () => {
  const router = useRouter()
  const handleLogin = () => {
    router.navigate({pathname: "(home)", params: {session: "logged in Successfully"}})
  }
  const handleSignupSwitch = () => { 
    router.navigate({pathname: "/signUp", params: {session: "Switched"}})
   };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            resizeMode="cover"
            source={require("../../assets/images/shop-app-logo.png")}
            style={{ position: "relative", width: "100%", height: "100%" }}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.groupInput}>
            <View>
              <Text>Email</Text>
              <TextInput style={styles.input} />
            </View>
            <View>
              <Text>Password</Text>
              <TextInput style={styles.input} />
            </View>
            <MainButton
              onPress={handleLogin}
              style={styles.btn}
              text={styles.btnText}
            >
              Login
            </MainButton>
          </View>
          <View style={styles.alt}>
            <Text>Dont't have an account?</Text>
            <Pressable
              onPress={handleSignupSwitch}
              style={{
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Text style={styles.hlt}>Sign up</Text>
            </Pressable>
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
    backgroundColor: "lightgreen",
    flex: 1,
  },
  content: {
    width: "80%",
    height: "80%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 5,
  },
  logoContainer: {
    borderRadius: 30,
    alignSelf: "center",
    width: "50%",
    height: "30%",
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
  },
  formContainer: {
    gap: 30,
  },
  title: {
    textAlign: "center",
    fontWeight: "heavy",
    fontSize: Dimensions.get("window").fontScale * 25,
  },
  groupInput: {
    gap: 30,
  },
  input: {
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "blue",
    width: "40%",
    padding: 10,
  },
  btnText: {
    color: "white",
    fontWeight: "heavy",
    fontSize: Dimensions.get("window").fontScale * 20,
  },
  alt: {
    textAlign: "center",
    textAlignVertical: "top",
  },
  hlt: {
    color: "blue",
  },
});