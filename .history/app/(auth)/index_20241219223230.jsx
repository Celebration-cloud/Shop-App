import React from 'react'

import { Button, Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native'

import { useRouter } from 'expo-router';
import MainButton from '../../components/MainButton';

const LoginScreen = () => {
  const router = useRouter()
  const handleLogin = () => {
    router.navigate({pathname: "(home)", params: {session: "logged in Successfully"}})
  }
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
            <MainButton onPress={handleLogin} style={styles.btn} text={styles.btnText}>Login</MainButton>
          </View>
          <Text>Dont' have an account? <Text></Text></Text>
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
    width: "80%",
    height: "80%",
    borderWidth: 2,
    borderColor: "black",
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
    padding: 10
  },
  btnText: {
    color: "white",
    fontWeight: "heavy",
    fontSize: Dimensions.get("window").fontScale * 20
  }
});