import React from 'react'

import { Button, Dimensions, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

import { useRouter } from 'expo-router';
import MainButton from '../../components/MainButton';

const LoginScreen = () => {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFor();
  const handleLogin = () => {
    router.navigate({pathname: "(home)", params: {session: "logged in Successfully"}})
  }
  const handleSignupSwitch = () => { 
    router.navigate({pathname: "/signUp", params: {session: "Switched"}})
  };
  const onSubmit = (data) => {
    handleLogin(data);
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
              <Controller
                control={control}
                rules={{ required: "Email is required" }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                )}
                name="email"
              />
              {errors.email && (
                <Text style={styles.error}>{errors.email.message}</Text>
              )}
            </View>
            <View>
              <Text>Password</Text>
              <Controller
                control={control}
                rules={{ required: "Password is required" }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry
                  />
                )}
                name="password"
              />
              {errors.password && (
                <Text style={styles.error}>{errors.password.message}</Text>
              )}
            </View>
            <MainButton
              onPress={handleSubmit(onSubmit)}
              style={styles.btn}
              text={styles.btnText}
            >
              Login
            </MainButton>
          </View>
          <View style={styles.alt}>
            <Text>Don't have an account?</Text>
            <Pressable
              onPress={handleSignupSwitch}
              style={{ justifyContent: "center", alignItems: "center" }}
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
    justifyContent: "center",
    flexDirection: "row",
    gap: 0,
  },
  qns: {
    textAlign: "center",
  },
  hlt: {
    color: "blue",
    textAlign: "center",
  },
});